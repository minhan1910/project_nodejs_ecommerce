interface ICategory {
  name?: string; // Tên danh mục
  description?: string; // Mô tả
  active?: boolean; // Trạng thái
  priority?: number; // Ưu tiên
  productIds?: string[]; // Mã sản phẩm
}

class Category {
  private name?: string; // Tên danh mục
  private description?: string; // Mô tả
  private active?: boolean; // Trạng thái
  private priority?: number; // Ưu tiên
  private productIds?: string[]; // Mã sản phẩm

  constructor(category?: ICategory) {
    this.name = category?.name;
    this.description = category?.description;
    this.active = category?.active;
    this.priority = category?.priority;
    this.productIds = category?.productIds;
  }

  get getName(): string | undefined {
    return this.name;
  }

  set setName(name: string | undefined) {
    this.name = name;
  }

  get getDescription(): string | undefined {
    return this.description;
  }

  set setDescription(description: string | undefined) {
    this.description = description;
  }

  get getActive(): boolean | undefined {
    return this.active;
  }

  set setActive(active: boolean | undefined) {
    this.active = active;
  }

  get getPriority(): number | undefined {
    return this.priority;
  }

  set setPriority(priority: number | undefined) {
    this.priority = priority;
  }

  get getProductIds(): string[] | undefined {
    return this.productIds;
  }

  set setProductIds(productIds: string[] | undefined) {
    this.productIds = productIds;
  }
}

export default Category;
