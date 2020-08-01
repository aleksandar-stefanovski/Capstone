export class Products {
  id: string;
  productName: string;
  description: string;
  productCategory: {
    id: string,
    productCategoryName: string
  };

  constructor(params?: any) {
    this.id = params.id;
    this.productName = params.productName;
    this.description = params.description;
    this.productCategory = {
      id: params.productCategory.id,
      productCategoryName: params.productCategory.productCategoryName
    };
  }
}