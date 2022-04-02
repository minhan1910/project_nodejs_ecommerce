import moment from "moment-timezone";
import { Context } from "../../helpers/graphql/context";
import { DiscountUnitEnum } from "./discountBill.graphql";
import { Promotion, PromotionModel, PromotionType } from "./promotion.model";
import { promotionService } from "./promotion.service";

export default {
  Query: {
    getAllPromotion: async (root: any, args: any, context: Context) => {
      const { q } = args;
      // TODO: set filter actived promotion
      return await promotionService.fetch(q);
    },
    getOnePromotion: async (root: any, args: any, context: any) => {
      const { id } = args;

      return promotionService.findById(id);
    },
  },
  Mutation: {
    createPromotion: async (root: any, args: any, context: Context) => {
      context.auth(["ADMIN"]);
      const { data } = args;

      checkPropertiesOfPromotion(data);

      // checkPromotionDiscountBill(data.discountBill);

      const promotion = await promotionService.create(data);
      return promotion;
    },

    // TODO: Not done check properties update promotion
    updatePromotion: async (root: any, args: any, context: Context) => {
      context.auth(["ADMIN"]);
      const { id, data } = args;
      return await promotionService.update(id, data);
    },
    deletePromotion: async (root: any, args: any, context: any) => {
      context.auth(["ADMIN"]);
      const { id } = args;
      console.log(id);
      return await promotionService.delete(id);
    },
    deletePromotions: async (root: any, args: any, context: any) => {
      context.auth(["ADMIN"]);
      const { ids } = args;
      return await promotionService.deleteManyById(ids);
    },
    deleteAllPromotion: async (root: any, args: any, context: any) => {
      context.auth(["ADMIN"]);
      return await promotionService.deleteMany();
    },
  },
};

// You can choose one of three types of discounts:
// amount (e.g. $10 off),
// percent (e.g. 20% off),
// unit (e.g. 2 piano lessons).

const propertiesPromotion: string[] = [
  "name",
  "description",
  "startDate",
  "endDate",
  "type",
  "offerItems",
];

function checkPromotionType(type: string) {
  const arrType: string[] = Object.values(PromotionType);
  if (!arrType.includes(type)) {
    throw new Error(`${type} is not a valid type`);
  }
}

function checkPromotionDiscountBill(discountBill: any) {
  discountBill.discountUnit = discountBill.discountUnit.toUpperCase();
  const arrDiscountUnit: string[] = Object.values(DiscountUnitEnum);
  if (!arrDiscountUnit.includes(discountBill.discountUnit)) {
    throw new Error(
      `${discountBill.discountUnit} is not a valid discountUnit !`
    );
  }

  if (discountBill.maxDiscount < 0) {
    throw new Error(
      `maxDiscount is ${discountBill.maxDiscount} must be greater than 0 !`
    );
  }

  if (
    discountBill.discountValue < 0 ||
    discountBill.discountValue > discountBill.maxDiscount
  ) {
    throw new Error(
      `discountValue is ${discountBill.discountValue} must be between 0 and ${discountBill.maxDiscount} !`
    );
  }

  // if discount unit is percent, u set default discount max equal to 100
  // discountBill.discountMax =
  //   discountBill.discountUnit === DiscountUnitEnum.PERCENT
  //     ? 100
  //     : discountBill.discountMax;
}

function checkPropertiesOfPromotion(data: any) {
  propertiesPromotion.forEach((property) => {
    if (!data[property]) {
      throw new Error(`${property} is required`);
    }
  });
}
