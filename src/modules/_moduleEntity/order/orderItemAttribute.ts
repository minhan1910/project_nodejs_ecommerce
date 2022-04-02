export interface IOrderItemAttribute {
  _id?: string;
  attrId?: string; // Mã thuộc tính
  attrName?: string; // Tên thuộc tính
  attrOptionName?: string; // Tên tùy chọn
  attrOptionPrice?: number; // Giá tùy chọn
}

class OrderItemAttribute {
  private _id?: string;
  private attrId?: string; // Mã thuộc tính
  private attrName?: string; // Tên thuộc tính
  private attrOptionName?: string; // Tên tùy chọn
  private attrOptionPrice?: number; // Giá tùy chọn

  constructor(orderItemAttribute?: IOrderItemAttribute) {
    this._id = orderItemAttribute?._id;
    this.attrId = orderItemAttribute?.attrId;
    this.attrName = orderItemAttribute?.attrName;
    this.attrOptionName = orderItemAttribute?.attrOptionName;
    this.attrOptionPrice = orderItemAttribute?.attrOptionPrice;
  }

  get getId(): string | undefined {
    return this._id;
  }

  set setId(id: string | undefined) {
    this._id = id;
  }

  get getAttrId(): string | undefined {
    return this.attrId;
  }

  set setAttrId(attrId: string | undefined) {
    this.attrId = attrId;
  }

  get getAttrName(): string | undefined {
    return this.attrName;
  }

  set setAttrName(attrName: string | undefined) {
    this.attrName = attrName;
  }

  get getAttrOptionName(): string | undefined {
    return this.attrOptionName;
  }

  set setAttrOptionName(attrOptionName: string | undefined) {
    this.attrOptionName = attrOptionName;
  }

  get getAttrOptionPrice(): number | undefined {
    return this.attrOptionPrice;
  }

  set setAttrOptionPrice(attrOptionPrice: number | undefined) {
    this.attrOptionPrice = attrOptionPrice;
  }
}

export default OrderItemAttribute;
