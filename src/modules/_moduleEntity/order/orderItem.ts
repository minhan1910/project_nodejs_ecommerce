import { IProduct } from "../product/product";
import { IOrderItemAttribute } from "./orderItemAttribute";

export interface IOrderItem {
  product?: IProduct;
  qty?: number; // Số lượng
  amount?: number; // Thành tiền
  attrs?: IOrderItemAttribute[]; // Thuộc tính
  attrAmount?: number; // Thành tiền thuộc tính

  discountAmount?: number; //  sum of all discounts applied to this line item
  appliedDiscountAmount?: number; // sum of discounts applied to this line item in a particular request
}

class OrderItem {
  private product?: IProduct;
  private qty?: number;
  private amount?: number;
  private attrs?: IOrderItemAttribute[];
  private attrAmount?: number;
  private discountAmount?: number;
  private appliedDiscountAmount?: number;

  constructor(orderItem?: IOrderItem) {
    this.product = orderItem?.product;
    this.qty = orderItem?.qty;
    this.amount = orderItem?.amount;
    this.attrs = orderItem?.attrs;
    this.attrAmount = orderItem?.attrAmount;
    this.discountAmount = orderItem?.discountAmount;
    this.appliedDiscountAmount = orderItem?.appliedDiscountAmount;
  }

  get getProduct(): IProduct | undefined {
    return this.product;
  }

  set setProduct(product: IProduct | undefined) {
    this.product = product;
  }

  get getQty(): number | undefined {
    return this.qty;
  }

  set setQty(qty: number | undefined) {
    this.qty = qty;
  }

  get getAmount(): number | undefined {
    return this.amount;
  }

  set setAmount(amount: number | undefined) {
    this.amount = amount;
  }

  get getAttrs(): IOrderItemAttribute[] | undefined {
    return this.attrs;
  }

  set setAttrs(attrs: IOrderItemAttribute[] | undefined) {
    this.attrs = attrs;
  }

  get getAttrAmount(): number | undefined {
    return this.attrAmount;
  }

  set setAttrAmount(attrAmount: number | undefined) {
    this.attrAmount = attrAmount;
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

  set setAppliedDiscountAmount(appliedDiscountAmount: number | undefined) {
    this.appliedDiscountAmount = appliedDiscountAmount;
  }
}

export default OrderItem;
