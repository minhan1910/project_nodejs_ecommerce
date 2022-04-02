import { DiscountUnitEnum } from "../modules/promotion/discountBill.graphql";
import { Promotion } from "../modules/promotion/promotion.model";
// REFERENCE: https://github.com/voucherifyio/voucherify-nodejs-sdk/blob/master/src/utils.js

/**
 * @Desc  the function fix number
 *        exactly 2 digits after the decimal seperator
 *        Ex: 123.456789 => 123.46
 * @param {numeber=} value - money value
 * @returns {value: number}
 */
function roundMoney(value: number) {
  const places = 2;
  return +(Math.round(+`${value} + "e+" + ${places}`) + "e-" + places);
}

function validatePercentDiscountValue(discountValue: number) {
  if (!discountValue || discountValue < 0 || discountValue > 100) {
    throw new Error(
      `Invalid discount, percent discount must be between 0 and 100`
    );
  }
}

function validateAmountDiscountValue(discountValue: number) {
  if (!discountValue || discountValue < 0) {
    throw new Error(`Invalid discount, amount discount must be greater than 0`);
  }
}

function validateUnitDiscountValue(discountValue: number) {
  if (!discountValue || discountValue < 0) {
    throw new Error(`Invalid discount, unit discount must be greater than 0`);
  }
}

class CalculatorDiscount {

}







