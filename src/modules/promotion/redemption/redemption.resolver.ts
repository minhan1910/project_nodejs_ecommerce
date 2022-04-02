import _ from "lodash";

import { Context } from "../../../helpers/graphql/context";
import { OrderItem } from "../../order/orderItem.graphql";
import { ProductLoader } from "../../product/product.model";
import { OfferItems } from "../offerItem.graphql";
import { promotionService } from "../promotion.service";
import { redemptionService } from "./redemption.service";

export default {
  Query: {
    getAllRedemption: async (root: any, args: any, context: Context) => {
      const { q } = args;
      context.auth(["ADMIN"]);
      return await redemptionService.fetch(q);
    },
    getOneRedemption: async (root: any, args: any, context: any) => {
      const { id } = args;
      context.auth(["ADMIN"]);
      return redemptionService.findById(id);
    },
  },
  Mutation: {
    createAndUpdateRedemption: async (
      root: any,
      args: any,
      context: Context
    ) => {
      context.auth(["ADMIN"]);
      const { data } = args;

      const customerId = data.customerId;

      const user = redemptionService.findById(customerId);

      if (!user) {
        throw new Error("Khách hàng không tồn tại");
      }

      const { promotionCode, amount, subtotal } = data.order;

      //Getting and checking promotion
      const promotion = await promotionService.findOne(promotionCode);

      if (!promotion) {
        throw new Error("Mã khuyến mãi không tồn tại");
      }

      //check condition of promotion
      if (!promotion.actived) {
        throw new Error("Khuyến mãi đã bị vô hiệu hóa");
      }

      if (promotion.startDate! > new Date()) {
        throw new Error("Khuyến mãi chưa được kích hoạt");
      }

      if (promotion.endDate! < new Date()) {
        throw new Error("Khuyến mãi đã hết hạn");
      }

      //TODO: Not done
      //Đang lấy ra redemption trước đó đã được apply
      // nếu như không được apply thì để null và
      // create ra cho nó -------------------
      const namePromotion = promotion.name;
      const previoustRedemption = redemptionService.findOne({
        namePromotion,
        customerId,
      });

      // ====================

      //TODO: Getting all types in promotion, checking current type is exist in promotion and applying type on order
      const types = data.type;

      const elementsInTypes: any = Object.values(types);

      const typesPromotion = elementsInTypes.map(
        (elementType: any) => elementType.type
      );

      const indexTypeApplied = typesPromotion.findIndex(
        (type: any) => type !== null
      );

      if (indexTypeApplied === -1) {
        throw new Error("Không tìm thấy loại khuyến mãi");
      }

      // current type applied
      const currentTypeAppiliedOrder = elementsInTypes[indexTypeApplied];

      // hanlded by each type like calculate discount, calculate reward point, calculate shipfee

      //TODO: Get all products of offer items
      const offerItems: OfferItems[] = promotion.offerItems!;
      const offerItemsIds = offerItems.map((offerItem) => offerItem.productId);
      //offerItems is all product of promotion code
      const listProductDiscount = await ProductLoader.loadMany(offerItemsIds);
      const listProductDiscountMap = _.keyBy(listProductDiscount, "_id");

      //TODO: get all products and create for schema
      const itemsCurrentCart: OrderItem[] = data.items;

      const productIds = itemsCurrentCart.map((item) => item.productId);
      const products = await ProductLoader.loadMany(productIds);
      const productsMap = _.keyBy(products, "_id");

      //
      matchOfferItems(
        currentTypeAppiliedOrder,
        previoustRedemption,
        products,
        offerItems
      );

      //TODO: Calculating discount for each item
      //      and create new array of items with discount
      const orderItems = [];

      // traverse all products in Order
      for (const product of products) {
        // process order item
      }

      // Temporary redemption not done
      let totalDiscountAmount = 0;
      let totalAppliedDiscountAmount = 0;

      const update = {
        $inc: { redempted_count: 1 },
        customerId,
        order: {
          amount,
          totalDiscountAmount,
          subtotal,
          itemsCurrentCart,
        },
      };
      //check theo customerId
      const redemption = await redemptionService.findOneAndUpdate(
        { customerId, promotionCode },
        update
      );
      return redemption;
    },
    deleteRedemption: async (root: any, args: any, context: any) => {
      context.auth(["ADMIN"]);
      const { id } = args;
      return await redemptionService.delete(id);
    },
  },
};

enum DiscountType {
  PERCENT = "PERCENT",
  AMOUNT = "AMOUNT",
  UNIT = "UNIT",
}

enum EffectDiscount {
  APPLY_TO_ITEMS = "APPLY_TO_ITEMS",
  APPLY_TO_ORDER = "APPLY_TO_ORDER",

  ADD_NEW_ITEMS = "ADD_NEW_ITEMS",
  ADD_MISSING_ITEMS = "ADD_MISSING_ITEMS",
  ADD_MANY_ITEMS = "ADD_MANY_ITEMS",
}

function matchOfferItems(
  currentTypeAppiliedOrder: any,
  previoustRedemption: any,
  products: any[],
  offerItems: any[]
) {
  const { type, effect } = currentTypeAppiliedOrder;
  const offerItemsMap = _.keyBy(offerItems, "_id");
  const productsMap = _.keyBy(products, "_id");
  let itemsOrder: OrderItem[] = [];

  switch (type) {
    case DiscountType.PERCENT: {
      itemsOrder = getItemsOrderByPercent(
        currentTypeAppiliedOrder,
        previoustRedemption,
        products
      );

      break;
    }

    case DiscountType.AMOUNT:
      break;
    case DiscountType.UNIT:
      break;

    default:
      break;
  }
}

function getItemsOrderByPercent(
  currentTypeAppiliedOrder: any,
  previoustRedemption: any,
  products: any[]
): OrderItem[] {
  const { effect, discountValue, discountMax, excludeItems } =
    currentTypeAppiliedOrder;
  const itemsOrder: OrderItem[] = [];
  const itemOrder: OrderItem = {};
  let discountAmount = discountValue;
  let appliedDiscountAmount = discountValue;
  switch (effect) {
    case EffectDiscount.APPLY_TO_ITEMS:
      break;

    case EffectDiscount.APPLY_TO_ORDER:
      break;

    default:
      break;
  }

  return itemsOrder;
}
