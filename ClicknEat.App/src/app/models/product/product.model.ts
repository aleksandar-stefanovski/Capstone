import { ProductCategories, ProductCategory } from '../restaurant/restaurant.model';

export class GetProduct {
    id: any;
    restaurantId: any;
    productName: string;
    imagePath: string;
    description: string;
    price: string;
    ProductCategory?: ProductCategory;

    constructor(params?: any) {
        this.id = params.id;
        this.restaurantId = params.restaurantId;
        this.productName = params.productName;
        this.description = params.description;
        this.imagePath = params.imagePath;
        this.price = params.price;
        this.ProductCategory = params.ProductCategory;
    }
}

export class ProductAddEdit {
    productName: string;
    description: string;
    price: number;
    imagePath: string;
    categoryToProductRequest: ProductCategories;
}
