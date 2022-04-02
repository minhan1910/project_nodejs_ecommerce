export interface IDiscountOrder {
  itemsDiscountAmount?: number; // sums up all product-specific discounts applied to this order id,
  totalDiscountAmount?: number; // sums up all order-level and all product-specific discounts applied to this order id
  itemsApppliedDiscountAmount?: number; // sums up all product-specific discounts applied in a particular request
  totalAppliedDiscountAmount?: number; // sums up all order-level and all product-specific discounts applied in a particular request
}

export interface IDiscountItem {
  discountAmount?: number;
  appliedDiscountAmount?: number;
}

class DiscountOrder {
  private itemsDiscountAmount?: number;
  private totalDiscountAmount?: number;
  private itemsApppliedDiscountAmount?: number;
  private totalAppliedDiscountAmount?: number;
  private discountAmount?: number;
  private appliedDiscountAmount?: number;

  constructor(discountOrder?: IDiscountOrder, discountItem?: IDiscountItem) {
    this.itemsDiscountAmount = discountOrder?.itemsDiscountAmount;
    this.totalDiscountAmount = discountOrder?.totalDiscountAmount;
    this.itemsApppliedDiscountAmount =
      discountOrder?.itemsApppliedDiscountAmount;
    this.totalAppliedDiscountAmount = discountOrder?.totalAppliedDiscountAmount;
    this.discountAmount = discountItem?.discountAmount;
    this.appliedDiscountAmount = discountItem?.appliedDiscountAmount;
  }

  get getItemsDiscountAmount(): number | undefined {
    return this.itemsDiscountAmount;
  }

  set setItemsDiscountAmount(itemsDiscountAmount: number | undefined) {
    this.itemsDiscountAmount = itemsDiscountAmount;
  }

  get getTotalDiscountAmount(): number | undefined {
    return this.totalDiscountAmount;
  }

  set setTotalDiscountAmount(totalDiscountAmount: number | undefined) {
    this.totalDiscountAmount = totalDiscountAmount;
  }

  get getItemsApppliedDiscountAmount(): number | undefined {
    return this.itemsApppliedDiscountAmount;
  }

  set setItemsApppliedDiscountAmount(
    itemsApppliedDiscountAmount: number | undefined
  ) {
    this.itemsApppliedDiscountAmount = itemsApppliedDiscountAmount;
  }

  get getTotalAppliedDiscountAmount(): number | undefined {
    return this.totalAppliedDiscountAmount;
  }

  set setTotalAppliedDiscountAmount(
    totalAppliedDiscountAmount: number | undefined
  ) {
    this.totalAppliedDiscountAmount = totalAppliedDiscountAmount;
  }

  get getDiscountAmount(): number | undefined {
    return this.discountAmount;
  }

  set setDiscountAmount(discountAmount: number | undefined) {
    this.discountAmount = discountAmount;
  }

  get getAppliedDiscountAmount(): number | undefined {
    return this.appliedDiscountAmount;
  }
}

export default DiscountOrder;
