import { gql } from "apollo-server-express";
import { Schema } from "mongoose";

export enum EffectDiscountPercent {
  APPLY_TO_ITEMS = "APPLY_TO_ITEMS",
  APPLY_TO_ORDER = "APPLY_TO_ORDER",
}

export type DiscountPercent = {
  type?: String; // kiểu giảm giá
  discountValue?: number; // số lượng giảm giá
  discountMax?: number; // tối đa số lượng giảm giá
  effect?: string; // hiệu lực giảm giá
  excludeItems?: string[]; // Loại trừ các sản phẩm
};

export const discountPercentSchema = new Schema({
  type: { type: String, required: true },
  discountValue: { type: Number, required: true },
  discountMax: { type: Number, required: true },
  effect: {
    type: String,
    enum: Object.values(EffectDiscountPercent),
    required: true,
  },
  excludeItems: { type: [Schema.Types.ObjectId] },
});

export default {
  schema: gql`
    type Percent {
      "kiểu giảm giá"
      type: String!
      "số lượng giảm giá"
      discountValue: Float
      "tối đa số lượng giảm giá" 
      discountMax: Float  
      "hiệu lực ${Object.values(EffectDiscountPercent)}"
      effect: String  
      "Loại trừ các sản phẩm"
      excludeItems: [ID]
    }
    input PercentInput {
      "kiểu giảm giá"
      type: String!
      "số lượng giảm giá"
      discountValue: Float
      "tối đa số lượng giảm giá" 
      discountMax: Float  
      "hiệu lực ${Object.values(EffectDiscountPercent)}"
      effect: String  
      "Loại trừ các sản phẩm"
      excludeItems: [ID]
    }
  `,
  resolvers: {},
};
