import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

import { Orders, OrderDetails } from '../models/orders/orders.model';
import { httpHeaders } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  endPoint = 'https://localhost:5001/api/v1/';

  getOrder(id: any): Observable<Orders> {
    return this.http.get(this.endPoint + `Admin/Orders/${id}`).pipe(map((res?: any) => {
      const order = new Orders({
        id: res.data.id,
        userId: res.data.userId,
        fullName: res.data.fullName,
        address: res.data.address,
        phoneNumber: res.data.phoneNumber,
        email: res.data.email,
        orderTotal: res.data.orderTotal,
        orderPlaced: res.data.orderPlaced,
        orderDetails: res.data.orderDetails.map((orderDetails: any) => {
          return new OrderDetails({
            id: orderDetails.id,
            orderId: orderDetails.orderId,
            productId: orderDetails.productId,
            quantity: orderDetails.quantity,
            price: orderDetails.price,
            product: orderDetails.product
          });
        })
      });
      return order;
    })
    );
  }

  getOrders(): Observable<Orders[]> {
    return this.http.get(this.endPoint + `Admin/Orders`).pipe(map((res?: any) => {
      return <any>res.map((orders: {
        id: any; userId: any; fullName: any;
        address: any; phoneNumber: any; email: any; orderTotal: any; orderPlaced: any; orderDetails: any[];
      }) => {
        return new Orders({
          id: orders.id,
          userId: orders.userId,
          fullName: orders.fullName,
          address: orders.address,
          phoneNumber: orders.phoneNumber,
          email: orders.email,
          orderTotal: orders.orderTotal,
          orderPlaced: orders.orderPlaced,
          orderDetails: orders.orderDetails.map((orderDetails: any) => {
            return <any>new OrderDetails({
              id: orderDetails.id,
              orderId: orderDetails.orderId,
              productId: orderDetails.productId,
              quantity: orderDetails.quantity,
              price: orderDetails.price,
              product: orderDetails.product
            });
          })
        });
      });
    })
    );
  }
  getMine(): Observable<Orders[]> {
    return this.http.get(this.endPoint + `Profile/MyOrders`).pipe(map((res?: any) => {
      return <any>res.map((orders: {
        id: any; userId: any; fullName: any;
        address: any; phoneNumber: any; email: any; orderTotal: any; orderPlaced: any; orderDetails: any[];
      }) => {
        return new Orders({
          id: orders.id,
          userId: orders.userId,
          fullName: orders.fullName,
          address: orders.address,
          phoneNumber: orders.phoneNumber,
          email: orders.email,
          orderTotal: orders.orderTotal,
          orderPlaced: orders.orderPlaced,
          orderDetails: orders.orderDetails.map((orderDetails: any) => {
            return <any>new OrderDetails({
              id: orderDetails.id,
              orderId: orderDetails.orderId,
              productId: orderDetails.productId,
              quantity: orderDetails.quantity,
              price: orderDetails.price,
              product: orderDetails.product
            });
          })
        });
      });
    })
    );
  }

  createOrder(): Observable<any> {
    return this.http.delete(this.endPoint + 'Admin/CreateOrder', httpHeaders());
  }

  deleteOrder(id: string): Observable<any> {
    return this.http.delete(this.endPoint + 'Admin/' + id);
  }

}
