export interface IAmount {
  discountValue?: number; // số lượng giảm giá
  effect?: string; // hiệu lực giảm giá
  exlcudeItems?: string[]; // Loại trừ các sản phẩm
}

class Amount {
  private discountValue?: number; // số lượng giảm giá
  private effect?: string; // hiệu lực giảm giá
  private exlcudeItems?: string[]; // Loại trừ các sản phẩm

  constructor(amount?: IAmount) {
    this.discountValue = amount?.discountValue;
    this.effect = amount?.effect;
    this.exlcudeItems = amount?.exlcudeItems;
  }

  get getDiscountValue(): number | undefined {
    return this.discountValue;
  }

  set setDiscountValue(discountValue: number | undefined) {
    this.discountValue = discountValue;
  }

  get getEffect(): string | undefined {
    return this.effect;
  }

  set setEffect(effect: string | undefined) {
    this.effect = effect;
  }

  get getExlcudeItems(): string[] | undefined {
    return this.exlcudeItems;
  }
}

export default Amount;
