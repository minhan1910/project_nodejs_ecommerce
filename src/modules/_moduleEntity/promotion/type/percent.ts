export interface IPercent {
  discountValue?: number; // số lượng giảm giá
  discountMax?: number; // tối đa số lượng giảm giá
  effect?: string; // hiệu lực giảm giá
  exlcudeItems?: string[]; // Loại trừ các sản phẩm
}

class Percent {
  private discountValue?: number; // số lượng giảm giá
  private discountMax?: number; // tối đa số lượng giảm giá
  private effect?: string; // hiệu lực giảm giá
  private exlcudeItems?: string[]; // Loại trừ các sản phẩm

  constructor(amount?: IPercent) {
    this.discountValue = amount?.discountValue;
    this.discountMax = amount?.discountMax;
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

  get getDiscountMax(): number | undefined {
    return this.discountMax;
  }

  set setDiscountMax(discountMax: number | undefined) {
    this.discountMax = discountMax;
  }
}

export default Percent;
