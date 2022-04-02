export interface IAttributeOption {
  _id?: string;
  name?: string; // Tên thuộc tính
  price?: number; // Giá
  isDefault?: boolean; // Mặc định
}

class AttributeOption {
  private _id?: string;
  private name?: string; // Tên thuộc tính
  private price?: number; // Giá
  private isDefault?: boolean; // Mặc định

  constructor(attributeOption?: IAttributeOption) {
    this._id = attributeOption?._id;
    this.name = attributeOption?.name;
    this.price = attributeOption?.price;
    this.isDefault = attributeOption?.isDefault;
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

  get getPrice(): number | undefined {
    return this.price;
  }

  set setPrice(price: number | undefined) {
    this.price = price;
  }

  get getIsDefault(): boolean | undefined {
    return this.isDefault;
  }

  set setIsDefault(isDefault: boolean | undefined) {
    this.isDefault = isDefault;
  }
}

export default AttributeOption;
