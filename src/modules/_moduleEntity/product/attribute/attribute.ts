import { IAttributeOption } from "./attributeOption";

export interface IAttribute {
  _id?: string;
  name?: string; // Tên thuộc tính
  required?: boolean; // Bắt buộc
  min?: number; // Số lượng option chọn tối thiểu
  max?: number; // Số lượng option chọn tối đa
  options?: IAttributeOption[]; // Option
}

class Attribute {
  private _id?: string;
  private name?: string; // Tên thuộc tính
  private required?: boolean; // Bắt buộc
  private min?: number; // Số lượng option chọn tối thiểu
  private max?: number; // Số lượng option chọn tối đa
  private options?: IAttributeOption[]; // Option

  constructor(attribute?: IAttribute) {
    this._id = attribute?._id;
    this.name = attribute?.name;
    this.required = attribute?.required;
    this.min = attribute?.min;
    this.max = attribute?.max;
    this.options = attribute?.options;
  }

  get getId(): string | undefined {
    return this._id;
  }

  set setId(id: string | undefined) {
    this._id = id;
  }

  get getName(): string | undefined {
    return this.name;
  }

  set setName(name: string | undefined) {
    this.name = name;
  }

  get getRequired(): boolean | undefined {
    return this.required;
  }

  set setRequired(required: boolean | undefined) {
    this.required = required;
  }

  get getMin(): number | undefined {
    return this.min;
  }

  set setMin(min: number | undefined) {
    this.min = min;
  }

  get getMax(): number | undefined {
    return this.max;
  }

  set setMax(max: number | undefined) {
    this.max = max;
  }

  get getOptions(): IAttributeOption[] | undefined {
    return this.options;
  }

  set setOptions(options: IAttributeOption[] | undefined) {
    this.options = options;
  }
}

export default Attribute;
