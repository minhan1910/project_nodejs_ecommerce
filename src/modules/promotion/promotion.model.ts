import { Schema } from "mongoose";

import { BaseDocument } from "../../base/baseModel";
import { getModelDataLoader } from "../../helpers/dataloader";
import { Mongo } from "../../helpers/mongo";
import { OfferItems, OfferItemsSchema } from "./offerItem.graphql";
import { Type, typeSchema } from "./type/type.graphql";

// Chỗ này có thể scale lên VOUCHER, COUPON là enity riêng biệt
// còn bây giờ lấy chung là COUPON hoặc trong enum nhưng vẫn discount 1 cônng thức chung

// campain
export enum PromotionType {
  DISCOUNT_DEFAULT = "DISCOUNT_COUPON",
  DISCOUNT_COUPON = "DISCOUNT_COUPON",
  DISCOUNT_VOUCHER = "DISCOUNT_VOUCHER",
}

export type Promotion = BaseDocument & {
  name?: string; // Tên khuyến mãi
  description?: string; // Miêu tả
  startDate?: Date; // Ngày bắt đầu
  endDate?: Date; // Ngày kết thúc
  actived?: boolean; // Trạng thái
  type?: Type; // Loại
  // discountBill?: DiscountBill; // Giảm giá
  offerItems?: OfferItems[]; // Danh sách sản phẩm giảm giá
};

const promotionSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, default: Date.now(), required: true },
    endDate: { type: Date, required: true },
    actived: { type: Boolean, default: false },
    //TODO: I have changed attribute type to Type
    type: {
      type: typeSchema,
      required: true,
    },
    offerItems: { type: [OfferItemsSchema], required: true },
  },
  { timestamps: true }
);

promotionSchema.index({ name: 1 }, { unique: true });
promotionSchema.index({ startDate: 1, endDate: 1 });
promotionSchema.index({ actived: 1 });

export const PromotionModel = Mongo.model<Promotion>(
  "Promotion",
  promotionSchema
);

export const PromotionLoader = getModelDataLoader(PromotionModel);
