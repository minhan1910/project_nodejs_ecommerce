import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getAllRedemption(q: QueryInput): RedemptionPageData
    getOneRedemption(id: ID!): Redemption
  }
  extend type Mutation {
    createAndUpdateRedemption(data: CreateAndUpdateRedemptionInput!): Redemption
    deleteRedemption(id: ID!): Boolean
  }
  type RedemptionPageData {
    data: [Redemption]
    pagination: Pagination
  }
  type Redemption {
    id: ID!
    createdAt: DateTime
    updatedAt: DateTime

    "Số lần áp dụng mã khuyến mãi, ..."
    redempted_count: Int
    "ID khách hàng"
    customerId: ID
    "Đơn hàng cho áp dụng khuyến mãi"
    order: RedemptionOrder
  }

  input CreateAndUpdateRedemptionInput {
    "ID khách hàng"
    customerId: ID!
    "Đơn hàng cho áp dụng khuyến mãi"
    order: RedemptionOrderInput!
  }

  input UpdateRedemptionInput {
    _empty: Mixed
  }
`;
