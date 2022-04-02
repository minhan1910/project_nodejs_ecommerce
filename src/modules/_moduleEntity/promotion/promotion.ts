import { IOfferItem } from "./offerItem";
import { IType } from "./type/type";

export interface IPromotion {
  name?: string; // Tên khuyến mãi
  description?: string; // Miêu tả
  startDate?: Date; // Ngày bắt đầu
  endDate?: Date; // Ngày kết thúc
  actived?: boolean; // Trạng thái
  type?: IType; // Loại
  // discountBill?: DiscountBill; // Giảm giá
  offerItems?: IOfferItem[]; // Danh sách sản phẩm giảm giá
}

class Promotion {
  private name?: string;
  private description?: string;
  private startDate?: Date;
  private endDate?: Date;
  private actived?: boolean;
  private type?: IType;
  private offerItems?: IOfferItem[];

  constructor(promotion?: IPromotion) {
    this.name = promotion?.name;
    this.description = promotion?.description;
    this.startDate = promotion?.startDate;
    this.endDate = promotion?.endDate;
    this.actived = promotion?.actived;
    this.type = promotion?.type;
    this.offerItems = promotion?.offerItems;
  }

  getName(): string | undefined {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getDescription(): string | undefined {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  getStartDate(): Date | undefined {
    return this.startDate;
  }

  setStartDate(startDate: Date): void {
    this.startDate = startDate;
  }

  getEndDate(): Date | undefined {
    return this.endDate;
  }

  setEndDate(endDate: Date): void {
    this.endDate = endDate;
  }

  getActived(): boolean | undefined {
    return this.actived;
  }

  setActived(actived: boolean): void {
    this.actived = actived;
  }

  getType(): IType | undefined {
    return this.type;
  }

  setType(type: IType): void {
    this.type = type;
  }

  getOfferItems(): IOfferItem[] | undefined {
    return this.offerItems;
  }

  setOfferItems(offerItems: IOfferItem[]): void {
    this.offerItems = offerItems;
  }
}

export default Promotion;
