import { gql } from "apollo-server-express";
import { Schema } from "mongoose";

export enum DiscountUnitEnum {
  ADD_NEW_ITEMS = "ADD_NEW_ITEMS",
  ADD_MISSING_ITEMS = "ADD_MISSING_ITEMS",
  ADD_MANY_ITEMS = "ADD_MANY_ITEMS",
}

export type DiscountUnit = {
  type?: string; // kiểu giảm giá
  amount?: number; // số lượng giảm giá
  discountUnits?: string[]; // danh sách sản phẩm sẽ tặng cho ADD_MANY_ITEMS
  discountUnit?: string; // một sản phẩm sẽ được tặng
  effect?: string; // các loại hiệu lực của discount unit
};

// Tại sao lại có thêm cái discountUnits và discountUnit
// trong khi có offerItems bênn ngoài
// vì ở đây offerItems sẽ cho các sản phẩm có thể áp dụng
// vào promotion này còn discountUnits và discountUnit
// vẫn được thêm vào để cụ thể sản phẩm nào được tặng
export const discountUnitSchema = new Schema({
  type: { type: String, required: true },
  amount: { type: Number, reuiqred: true },
  discountUnits: { type: [Schema.Types.ObjectId] },
  discountUnit: { type: Schema.Types.ObjectId },
  effect: {
    type: String,
    enum: Object.values(DiscountUnitEnum),
    reuiqred: true,
  },
});

export default {
  schema: gql`
    type Unit {
      "kiểu giảm giá"
      type: String!
      "số lượng giảm giá"
      amount: Int
      "danh sách sản phẩm sẽ tặng cho ADD_MANY_ITEMS"
      discountUnits: [ID]
      "một sản phẩm sẽ được tặng"
      discountUnit: ID
      "Hiệu lực ${Object.values(DiscountUnitEnum)}"
      effect: String!
    }
    input UnitInput {
      "kiểu giảm giá"
      type: String!
      "số lượng giảm giá"
      amount: Int!
      "danh sách sản phẩm sẽ tặng cho ADD_MANY_ITEMS"
      discountUnits: [ID]
      "một sản phẩm sẽ được tặng"
      discountUnit: ID
      "Hiệu lực ${Object.values(DiscountUnitEnum)}"
      effect: String!
    }
  `,
  resolvers: {},
};
