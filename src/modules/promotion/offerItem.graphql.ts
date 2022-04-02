import { gql } from "apollo-server-express";
import { Schema } from "mongoose";

import { BaseDocument } from "../../base/baseModel";
import { GraphqlResolver } from "../../helpers/graphql/resolver";
import { ProductLoader } from "../product/product.model";

export type OfferItems = BaseDocument & {
  productId?: string; //Mã sản phẩm
  quantity?: number; // Số lượng sản phẩm
};

export const OfferItemsSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, default: 0 },
});

export default {
  schema: gql`
    type OfferItems {
      "Mã sản phẩm"
      productId: ID!
      "Số lượng"
      quantity: Int

      "Sản phẩm"
      product: Product
    }

    input OfferItemsInput {
      "Mã sản phẩm"
      productId: ID!
      "Số lượng"
      quantity: Int
    }
  `,
  resolvers: {
    OfferItems: {
      product: GraphqlResolver.load(ProductLoader, "productId"),
    },
  },
};
