import { Schema } from "mongoose";

import { BaseDocument } from "../../../base/baseModel";
import { getModelDataLoader } from "../../../helpers/dataloader";
import { Mongo } from "../../../helpers/mongo";
import {
  RedemptionOrder,
  redemptionOrderSchema,
} from "./redemptionOrder.graphql";

export type Redemption = BaseDocument & {
  redempted_count?: number;
  customerId?: string; // id customer
  order?: RedemptionOrder; // Đơn hàng
};

const redemptionSchema = new Schema(
  {
    redempted_count: { type: Number, default: 0 },
    customerId: { type: Schema.Types.ObjectId, required: true },
    order: { type: redemptionOrderSchema, require: true },
  },
  { timestamps: true }
);

redemptionSchema.index({ customerId: 1 });

export const RedemptionModel = Mongo.model<Redemption>(
  "Redemption",
  redemptionSchema
);

export const RedemptionLoader = getModelDataLoader(RedemptionModel);
