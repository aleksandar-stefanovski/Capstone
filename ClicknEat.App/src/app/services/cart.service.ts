import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  endPoint = 'https://localhost:5001/api/v1/';

  getShoppingCart(): Observable<any> {
    return this.http.get(this.endPoint + 'ShoppingCart');
  }
}
