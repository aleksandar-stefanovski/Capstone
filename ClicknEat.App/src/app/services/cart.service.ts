import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { httpHeaders, httpOptionsWCredentials } from '../../environments/environment';
import { ShoppingCart, ShoppingCartItems, AddToShoppingCart } from '../models/shopping-cart/shopping-cart.model';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  endPoint = 'https://localhost:5001/api/v1/';


  getShoppingCart(): Observable<ShoppingCart> {
    return this.http.get(this.endPoint + `ShoppingCart`, httpOptionsWCredentials()).pipe(map((res?: any) => {
      const cart = new ShoppingCart({
        id: res.data.id,
        shoppingCartItems: res.data.shoppingCartItems
      });
      return cart;
    }));
  }


  // .pipe(map((res?: any) => {
  //   const cart = new ShoppingCart({
  //     id: res.id,
  //     restaurantId: res.restaurantId,
  //     productName: res.productName,
  //     description: res.description,
  //     price: res.price,
  //     shoppingCartItems = res.shoppingCartItems
  //   });
  //   return cart;
  // })
  // ))


  createShoppingCart(id: any): Observable<AddToShoppingCart> {
    return this.http.post(this.endPoint + `ShoppingCart/${id}`, httpOptionsWCredentials()).pipe(map((res?: any) => {
      const cart = new AddToShoppingCart({
        restaurantId: res.restaurantId,
        id: res.id,
        productName: res.productName,
        description: res.description,
        price: res.price,
        shoppingCartItems: res.shoppingCartItems
      });
      return cart;
    }));
  }
}
