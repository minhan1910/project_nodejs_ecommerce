import { gql } from 'apollo-server-express';
import { Schema } from 'mongoose';

import { GraphqlResolver } from '../../helpers/graphql/resolver';
import { ProductLoader } from '../product/product.model';
import { OrderItemAttribute, OrderItemAttributeSchema } from './orderItemAttribute.graphql';
  
export type OrderItem = {
  productId?: string; // Mã sản phẩm
  productName?: string; // Tên sản phẩm
  productImage?: string; // Ảnh sản phẩm
  productPrice?: number; // Giá sản phẩm
  productSellPrice?: number; // Giá bán sản phẩm
  qty?: number; // Số lượng
  amount?: number; // Thành tiền
  attrs?: OrderItemAttribute[]; // Thuộc tính
  attrAmount?: number; // Thành tiền thuộc tính

  discountAmount?: number; //  sum of all discounts applied to this line item
  appliedDiscountAmount?: number; // sum of discounts applied to this line item in a particular request
};

export const OrderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  productName: { type: String, required: true },
  productImage: { type: String },
  productPrice: { type: Number, default: 0 },
  productSellPrice: { type: Number, default: 0 },
  qty: { type: Number, default: 1, min: 1 },
  amount: { type: Number, default: 0 },
  attrs: { type: [OrderItemAttributeSchema], default: [] },
  attrAmount: { type: Number, default: 0 },

  discountAmount: { type: Number, default: 0 },
  appliedDiscountAmount: { type: Number, default: 0 },
});

export default {
  schema: gql`
    type OrderItem {
      "Mã sản phẩm"
      productId: ID
      "Tên sản phẩm"
      productName: String
      "Ảnh sản phẩm"
      productImage: String
      "Giá sản phẩm"
      productPrice: Float
      "Giá bán sản phẩm"
      productSellPrice: Float
      "Số lượng"
      qty: Int
      "Thành tiền"
      amount: Float
      "Thuộc tính"
      attrs: [OrderItemAttribute]
      "Thành tiền thuộc tính"
      attrAmount: Float
      "sum of all discounts applied to this line item"
      discountAmount: Float
      "sum of discounts applied to this line item in a particular request"
      appliedDiscountAmount: Float

      "Sản phẩm"
      product: Product
    }
    input OrderItemInput {
      "Mã sản phẩm"
      productId: ID
      "Số lượng"
      qty: Int
      "Thuộc tính"
      attrs: [OrderItemAttributeInput]
    }
  `,
  resolvers: {
    OrderItem: {
      product: GraphqlResolver.load(ProductLoader, "productId"),
    },
  },
};
