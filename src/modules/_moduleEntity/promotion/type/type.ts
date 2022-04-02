import Amount from "./amount";
import Percent from "./percent";
import Unit from "./unit";

export interface IType {
  unit?: Unit;
  percent?: Percent;
  amount?: Amount;
}

class Type {
  private unit?: Unit;
  private percent?: Percent;
  private Amount?: Amount;

  constructor(type?: IType) {
    this.unit = type?.unit;
    this.percent = type?.percent;
    this.Amount = type?.amount;
  }

  get getUnit(): Unit | undefined {
    return this.unit;
  }

  set setUnit(unit: Unit | undefined) {
    this.unit = unit;
  }

  get getPercent(): Percent | undefined {
    return this.percent;
  }

  set setPercent(percent: Percent | undefined) {
    this.percent = percent;
  }

  get getAmount(): Amount | undefined {
    return this.Amount;
  }
}

export default Type;
