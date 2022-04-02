import { OrderStatus } from "../../order/order.model";
import { IDiscountOrder } from "../promotion/discount/discountOrder";
import { IUser } from "../user/user";
import { IOrderItem } from "./orderItem";

interface IOrder {
  code?: string; // Mã đơn hàng
  buyerId?: string; // ID người mua
  buyerName?: string; // Tên người mua
  buyerPhone?: string; // Số điện thoại người mua
  buyerAddress?: string; // Địa chỉ người mua
  buyerLocation?: any; // Vị trí người mua

  subtotal?: number; // Tổng tiền
  discount?: number; // Giảm giá
  amount?: number; // Tổng tiền
  shipfee?: number; // Phí vận chuyển

  discountOrder?: IDiscountOrder; // Các thuộc tính giảm giá

  status?: OrderStatus; // Trạng thái

  promotionName?: string; // Tên khuyến mãi
  promotionId?: string; // ID khuyến mãi
  promotionCode?: string; // Mã khuyến mãi

  rewardPoint?: number; // Điểm thưởng
  useRewardPoint?: boolean; // Sử dụng điểm thưởng
  rewardPointDiscount?: number; // Giảm giá điểm thưởng

  items?: IOrderItem[]; // Sản phẩm
  branchId?: string; // ID chi nhánh
}

class Order {

}

export default Order;
