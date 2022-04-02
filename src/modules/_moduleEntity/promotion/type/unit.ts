import { DiscountUnitEnum } from "../../../promotion/type/unit.graphql";

export interface IUnit {
  amount?: number; // số lượng giảm giá
  discountUnits?: string[]; // danh sách sản phẩm sẽ tặng cho ADD_MANY_ITEMS
  discountUnit?: string; // một sản phẩm sẽ được tặng
  effect?: DiscountUnitEnum; // các loại hiệu lực của discount unit
}

class Unit {
  private amount?: number;
  private discountUnits?: string[];
  private discountUnit?: string;
  effect?: DiscountUnitEnum;

  constructor(unit?: IUnit) {
    this.amount = unit?.amount;
    this.discountUnits = unit?.discountUnits;
    this.discountUnit = unit?.discountUnit;
    this.effect = unit?.effect;
  }

  get getAmount(): number | undefined {
    return this.amount;
  }

  set setAmount(amount: number | undefined) {
    this.amount = amount;
  }

  get getDiscountUnits(): string[] | undefined {
    return this.discountUnits;
  }

  get getDiscountUnit(): string | undefined {
    return this.discountUnit;
  }

  set setDiscountUnit(discountUnit: string | undefined) {
    this.discountUnit = discountUnit;
  }
}

export default Unit;
