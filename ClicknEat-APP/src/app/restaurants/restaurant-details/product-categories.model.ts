export class ProductCategories {
    id: string;
    productCategoryName: string;

    constructor(params?: any) {
        this.id = params.id;
        this.productCategoryName = params.productCategoryName;
    }
}
