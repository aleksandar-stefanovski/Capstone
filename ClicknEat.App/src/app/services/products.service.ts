import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { httpHeaders } from '../../environments/environment';
import { ProductAddEdit } from '../models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }
  endPoint = 'https://localhost:5001/api/v1/';

  getProduct(productId: string): Observable<any> {
    return this.http.get(this.endPoint + `Product/${productId}`);
  }
 
  createProduct(id: any, product: ProductAddEdit): Observable<any> {
    return this.http.post(this.endPoint + `Admin/${id}/CreateProduct`, JSON.stringify({
      productName: product.productName,
      description: product.description,
      price: product.price,
      categoryToProductRequest: product.categoryToProductRequest
    }), httpHeaders());
  }

  updateProduct(product: ProductAddEdit, productId: string): Observable<any> {
    return this.http.put(this.endPoint + `Admin/UpdateProduct/${productId}`, JSON.stringify({
      productName: product.productName,
      description: product.description,
      price: product.price,
      categoryToProductRequest: product.categoryToProductRequest
    }), httpHeaders());
  }

  deleteProduct(productId: string) {
    return this.http.delete(this.endPoint + `Admin/DeleteProduct/${productId}`);
  }
}
