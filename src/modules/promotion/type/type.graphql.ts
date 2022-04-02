import { Context } from "../../../helpers/graphql/context";
import { gql } from "apollo-server-express";
import { Schema } from "mongoose";
import { DiscountUnit, discountUnitSchema } from "./unit.graphql";
import { DiscountPercent, discountPercentSchema } from "./percent.graphql";
import { DiscountAmount, discountAmountSchema } from "./amount.graphql";

export type Type = {
  unit?: DiscountUnit;
  percent?: DiscountPercent;
  amount?: DiscountAmount;
};

export const typeSchema = new Schema({
  unit: { type: discountUnitSchema },
  percent: { type: discountPercentSchema },
  amount: { type: discountAmountSchema },
});

export default {
  schema: gql`
    type Type {
      percent: Percent
      amount: Amount
      unit: Unit
    }
    input TypeInput {
      percent: PercentInput
      amount: AmountInput
      unit: UnitInput
    }
  `,
  resolvers: {},
};
