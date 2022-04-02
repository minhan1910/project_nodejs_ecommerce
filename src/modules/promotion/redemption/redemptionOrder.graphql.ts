import { Context } from "../../../helpers/graphql/context";
import { gql } from "apollo-server-express";
import { OrderItem } from "../../order/orderItem.graphql";
import { Schema } from "mongoose";

export enum RedemptionEnum {
  PROCESSING = "FAILED",
  SUCCESS = "SUCCESS",
}

export type RedemptionOrder = {
  status?: string; // status
  amount?: number; // the price before applying the discount
  subtotal?: number; // total amount (last price)
  itemsDiscountAmount?: number; // sums up all product-specific discounts applied to this order id,
  totalDiscountAmount?: number; // sums up all order-level and all product-specific discounts applied to this order id
  itemsAppliedDiscountAmount?: number; // sums up all product-specific discounts applied in a particular request
  totalAppliedDiscountAmount?: number; // sums up all order-level and all product-specific discounts applied in a particular request
  promotionName?: string; // Tên khuyến mãi
  promotionId?: string; // ID khuyến mãi
  promotionCode?: string; // Mã khuyến mãi
  items?: OrderItem[]; // list offer items
};

export const redemptionOrderSchema = new Schema({
  status: { type: String, enum: Object.values(RedemptionEnum) },
  amount: { type: Number, default: 0 },
  subtotal: { type: Number, default: 0 },
  itemsDiscountAmount: { type: Number, default: 0 },
  totalDiscountAmount: { type: Number, default: 0 },
  itemsAppliedDiscountAmount: { type: Number, default: 0 },
  totalAppliedDiscountAmount: { type: Number, default: 0 },
  items: { type: [Schema.Types.ObjectId], required: true },
});

export default {
  schema: gql`
    type RedemptionOrder {
      "Tên khuyến mãi"
      promotionName: String
      "ID khuyến mãi"
      promotionId: String
      "Mã khuyến mãi"
      promotionCode: String
      "status"
      status: String
      "the price before applying the discount"
      amount: Int
      "total amount (last price)"
      subtotal: Int
      "sums up all product-specific discounts applied to this order id,"
      itemsDiscountAmount: Int
      "sums up all order-level and all product-specific discounts applied to this order id"
      totalDiscountAmount: Int
      "sums up all product-specific discounts applied in a particular request"
      itemsAppliedDiscountAmount: Int
      "sums up all order-level and all product-specific discounts applied in a particular request"
      totalAppliedDiscountAmount: Int
      "list offer items"
      items: [OrderItem]
    }
    input RedemptionOrderInput {
      "Mã khuyến mãi"
      promotionCode: String!
      "the price before applying the discount"
      amount: Int!
      "total amount (last price)"
      subtotal: Int!
      "list offer items"
      items: [OrderItemInput]!
    }
  `,
  resolvers: {},
};
