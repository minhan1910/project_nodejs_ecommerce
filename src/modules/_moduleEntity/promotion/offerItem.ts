export interface IOfferItem {
  productId?: string; //Mã sản phẩm
  quantity?: number; // Số lượng sản phẩm
}

class OfferItem {
  private productId?: string;
  private quantity?: number;

  constructor(offerItem?: IOfferItem) {
    this.productId = offerItem?.productId;
    this.quantity = offerItem?.quantity;
  }

  get getProductId(): string | undefined {
    return this.productId;
  }

  set setProductId(productId: string | undefined) {
    this.productId = productId;
  }

  get getQuantity(): number | undefined {
    return this.quantity;
  }

  set setQuantity(quantity: number | undefined) {
    this.quantity = quantity;
  }
}

export default OfferItem;
