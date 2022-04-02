import { ApolloServer, gql } from "apollo-server-express";
import { Application, Request } from "express";
import _ from "lodash";
import {
  loadGraphql,
  loadGraphqlResolver,
  loadGraphqlSchema,
} from "../autoloader";
import GraphqlDateTime from "graphql-type-datetime";
import minifyGql from "minify-graphql-loader";
import morgan from "morgan";
import logger from "../logger";
import { Context } from "./context";

export class GraphqlServer {
  constructor(public app: Application) {}

  async start() {
    let typeDefs = [
      gql`
        scalar DateTime
        scalar Mixed

        type Query {
          _empty: String
        }
        type Mutation {
          _empty: String
        }
        type Subscription {
          _empty: String
        }
        input QueryInput {
          "Số phần tử trên trang"
          limit: Int
          "Số trang"
          page: Int
          "Sắp xếp"
          order: Mixed
          "Bộ lọc"
          filter: Mixed
          "Tìm kiếm"
          search: String
        }
        type Pagination {
          "Tổng số phần tử"
          total: Int
          "Số phần tử trên trang"
          limit: Int
          "Số trang"
          page: Int
        }
      `,
    ];
    let resolvers: any = {
      Query: {
        _empty: () => "empty",
      },
      DateTime: GraphqlDateTime,
    };

    // Load .schemas.ts
    const graphqlSchemas = await loadGraphqlSchema();
    typeDefs = typeDefs.concat(graphqlSchemas);

    // Load .resolvers.ts
    const graphqlResolvers = await loadGraphqlResolver();
    resolvers = _.merge(resolvers, graphqlResolvers);

    // Load .graphql.ts
    const graphql = await loadGraphql();

    typeDefs = typeDefs.concat(graphql.typedefs);
    resolvers = _.merge(resolvers, graphql.resolvers);

    const server = new ApolloServer({
      introspection: true,
      typeDefs: typeDefs,
      resolvers: resolvers,
      context: async ({ req }: { req: Request }) => {
        const context = new Context({ req });
        return context;
      },
    });

    await server.start();

    morgan.token("gql-query", (req: Request) => req.body.query);
    this.app.use(
      "/graphql",
      (req, _, next) => {
        if (req.body?.query) {
          req.body.query = minifyGql(req.body.query);
        }
        next();
      },
      morgan("GRAPHQL :gql-query - :status - :response-time ms", {
        skip: (req) =>
          _.get(req, "body.query", "").includes("IntrospectionQuery"),
        stream: {
          write: (msg: string) => logger.info(msg),
        },
      })
    );

    server.applyMiddleware({ app: this.app });
  }
}
