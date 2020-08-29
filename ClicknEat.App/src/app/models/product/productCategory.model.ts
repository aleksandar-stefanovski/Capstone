export class ProductCategoryAddEdit {
    id?: any;
    productCategoryName: string;
}

export class CategoryProduct {
    id: any;
    restaurantId: string;
    productName: string;
    price: number;
    description: string;
    productCategory: {
      id: string,
      productCategoryName: string
    };
  
    constructor(params?: any) {
      this.id = params.id;
      this.productName = params.productName;
      this.price = params.price;
      this.description = params.description;
  
      this.productCategory = {
        id: params.productCategory.id,
        productCategoryName: params.productCategory.productCategoryName
      };
    }
  }