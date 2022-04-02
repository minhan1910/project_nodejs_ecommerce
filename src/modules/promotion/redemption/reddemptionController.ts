import DiscountOrder, {
  IDiscountOrder,
} from "../../_moduleEntity/promotion/discount/discountOrder";
import Promotion, { IPromotion } from "../../_moduleEntity/promotion/promotion";

enum RedemptionStatus {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export interface IRedemption {}

class RedemptionController {
  private customerId?: string;
  private promotion?: Promotion;
  private status?: RedemptionStatus;
  private amount?: number;
  private subtotal?: number;
  private discountOrder?: DiscountOrder;

  constructor(data?: any) {
    this.customerId = data?.customerId;
    this.promotion = data?.promotion;
    this.status = data?.status;
    this.amount = data?.amount;
    this.subtotal = data?.subtotal;
    this.discountOrder = data?.discountOrder;
  }

  get getCustomerId(): string | undefined {
    return this.customerId;
  }

  set setCustomerId(customerId: string | undefined) {
    this.customerId = customerId;
  }

  get getPromotion(): Promotion | undefined {
    return this.promotion;
  }

  set setPromotion(promotion: Promotion | undefined) {
    this.promotion = promotion;
  }

  get getStatus(): string | undefined {
    return this.status;
  }

  get getAmount(): number | undefined {
    return this.amount;
  }

  set setAmount(amount: number | undefined) {
    this.amount = amount;
  }

  get getSubtotal(): number | undefined {
    return this.subtotal;
  }

  set setSubtotal(subtotal: number | undefined) {
    this.subtotal = subtotal;
  }

  get getDiscountOrder(): DiscountOrder | undefined {
    return this.discountOrder;
  }

  set setDiscountOrder(discountOrder: DiscountOrder | undefined) {
    this.discountOrder = discountOrder;
  }
}

export default RedemptionController;
