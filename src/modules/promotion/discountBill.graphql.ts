import { gql } from "apollo-server-express";
import { Schema } from "mongoose";
import { Type } from "./type/type.graphql";
import { DiscountUnit } from "./type/unit.graphql";

export enum DiscountUnitEnum {
  PERCENT = "PERCENT",
  AMOUNT = "AMOUNT",
  UNIT = "UNIT",
}

export type DiscountBill = {
  // type?: Type;
  discountUnit?: string;
  discountValue?: number;
  maxDiscount?: number;
};

export const DiscountBillSchema = new Schema({
  discountUnit: {
    type: String,
    enum: Object.values(DiscountUnitEnum),
  },
  discountValue: { type: Number, default: 0, reuiqred: true },
  maxDiscount: { type: Number, default: 0 },
});

export default {
  schema: gql`
    type DiscountBill {
      "Đơn vị giảm giá"
      discountUnit: String
      "Giá trị giảm giá"
      discountValue: Float
      "Giới hạn giảm giá"
      maxDiscount: Float
    }

    input DiscountBillInput {
      "Đơn vị giảm giá"
      discountUnit: String
      "Giá trị giảm giá"
      discountValue: Float
      "Giới hạn giảm giá"
      maxDiscount: Float
    }
  `,
  resolvers: {},
};
