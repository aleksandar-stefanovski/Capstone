import { Products } from '../restaurant/restaurant.model';

export class ShoppingCart {
    id: any;
    shoppingCartItems: ShoppingCartItems;

    constructor(params: any) {
        this.id = params.id;
        this.shoppingCartItems = params.shoppingCartItems;
    }
}

export class AddToShoppingCart {
    id: any;
    restaurantId: any;
    productName: string;
    description: string;
    price: number;
    imagePath?: null;
    productCategory?: null;
    restaurant?: null;
    orderDetails?: [];
    shoppingCartItems: ShoppingCartItems[];

    constructor(params: any) {
        this.id = params.id;
        this.restaurantId = params.restaurantId;
        this.productName = params.productName;
        this.description = params.description;
        this.price = params.price;
        this.shoppingCartItems = params.shoppingCartItems;
    }
}

export class ShoppingCartItems {
    id: any;
    shoppingCartId: any;
    quantity: number;
    product: Products[];
    shoppingCartTotal: number;

    constructor(params: any) {
        this.id = params.id;
        this.shoppingCartId = params.shoppingCartId;
        this.quantity = params.quantity;
        this.product = params.product;
        this.shoppingCartTotal = params.shoppingCartTotal;
    }
}