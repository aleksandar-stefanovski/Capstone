import { Products } from '../restaurant/restaurant.model';

export class Orders {
    id: any;
    userId: any;
    fullName: string;
    address: string;
    phoneNumber: string;
    email: string;
    orderTotal: number;
    orderPlaced: Date;
    orderDetails: OrderDetails[];

    constructor(params: any) {
        this.id = params.id;
        this.userId = params.userId;
        this.fullName = params.fullName;
        this.address = params.address;
        this.phoneNumber = params.phoneNumber;
        this.email = params.email;
        this.orderTotal = params.orderTotal;
        this.orderPlaced = params.orderPlaced;
        this.orderDetails = params.orderDetails;
    }
}

export class OrderDetails {
    id: any;
    orderId: any;
    productId: any;
    quantity: any;
    price: number;
    product: Products;

    constructor(params: any) {
        this.id = params.id;
        this.orderId = params.orderId;
        this.productId = params.productId;
        this.quantity = params.quantity;
        this.product = params.product;
    }
}


