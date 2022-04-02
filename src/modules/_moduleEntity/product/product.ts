import { IAttribute } from "./attribute/attribute";

export interface IProduct {
  code?: string; // Mã sản phẩm
  name?: string; // Tên sản phẩm
  description?: string; // Mô tả
  images?: string[]; // Ảnh
  basePrice?: number; // Giá gốc
  sellPrice?: number; // Giá bán
  active?: boolean; // Trạng thái
  categoryId?: string; // ID danh mục
  view?: number; // Lượt xem
  attributes?: IAttribute[]; // Thuộc tính
}

class Product {
    private code?: string; // Mã sản phẩm
    private name?: string; // Tên sản phẩm
    private description?: string; // Mô tả
    private images?: string[]; // Ảnh
    private basePrice?: number; // Giá gốc
    private sellPrice?: number; // Giá bán
    private active?: boolean; // Trạng thái
    private categoryId?: string; // ID danh mục
    private view?: number; // Lượt xem
    private attributes?: IAttribute[]; // Thuộc tính
    
    constructor(product?: IProduct) {
        this.code = product?.code;
        this.name = product?.name;
        this.description = product?.description;
        this.images = product?.images;
        this.basePrice = product?.basePrice;
        this.sellPrice = product?.sellPrice;
        this.active = product?.active;
        this.categoryId = product?.categoryId;
        this.view = product?.view;
        this.attributes = product?.attributes;
    }
    
    get getCode(): string | undefined {
        return this.code;
    }
    
    set setCode(code: string | undefined) {
        this.code = code;
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
    
    get getImages(): string[] | undefined {
        return this.images;
    }
    
    set setImages(images: string[] | undefined) {
        this.images = images;
    }
    
    get getBasePrice(): number | undefined {
        return this.basePrice;
    }
}

export default Product;