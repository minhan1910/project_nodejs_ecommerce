import { gql } from "apollo-server-express";
import { Schema } from "mongoose";

export enum EffectDiscountAmount {
  APPLY_TO_ITEMS = "APPLY_TO_ITEMS",
  APPLY_TO_ORDER = "APPLY_TO_ORDER",
}

export type DiscountAmount = {
  type?: string; // kiểu giảm giá
  discountValue?: number; // số lượng giảm giá
  effect?: string; // hiệu lực giảm giá
  excludeItems?: string[]; // Loại trừ các sản phẩm
};

export const discountAmountSchema = new Schema({
  type: { type: String, required: true },
  discountValue: { type: Number, required: true },
  effect: {
    type: String,
    enum: Object.values(EffectDiscountAmount),
    required: true,
  },
  excludeItems: { type: [Schema.Types.ObjectId] },
});

export default {
  schema: gql`
    type Amount {
      "kiểu giảm giá"
      type: String!
      "số lượng giảm giá"
      discountValue: Float!
      "hiệu lực ${Object.values(EffectDiscountAmount)}"
      effect: String! 
      "Loại trừ các sản phẩm"
      excludeItems: [ID]  
    }
    input AmountInput {
      "kiểu giảm giá"
      type: String!
      "số lượng giảm giá"
      discountValue: Float!  
      "hiệu lực ${Object.values(EffectDiscountAmount)}"
      effect: String!
      "Loại trừ các sản phẩm"
      excludeItems: [ID]  
    }
  `,
  resolvers: {},
};
