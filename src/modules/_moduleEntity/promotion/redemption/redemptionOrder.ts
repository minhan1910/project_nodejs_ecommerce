import { IOrderItem } from "../../order/orderItem";

export interface IRedemptionOrder {
  status?: string; // status
  amount?: number; // the price before applying the discount
  subtotal?: number; // total amount (last price)
  itemsDiscountAmount?: number; // sums up all product-specific discounts applied to this order id,
  totalDiscountAmount?: number; // sums up all order-level and all product-specific discounts applied to this order id
  itemsAppliedDiscountAmount?: number; // sums up all product-specific discounts applied in a particular request
  totalAppliedDiscountAmount?: number; // sums up all order-level and all product-specific discounts applied in a particular request
  
  //promotion
  promotionName?: string; // Tên khuyến mãi
  promotionId?: string; // ID khuyến mãi
  promotionCode?: string; // Mã khuyến mãi

  items?: IOrderItem[]; // list offer items
}

class RedemptionOrder {
    
}

export default RedemptionOrder;
