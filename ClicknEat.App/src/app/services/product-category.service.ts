import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory, Products } from '../models/restaurant/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { ProductCategoryAddEdit, CategoryProduct } from '../models/product/productCategory.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  constructor(private http: HttpClient) { }
  endPoint = 'https://localhost:5001/api/v1/';

  getProductCategories(id: any): Observable<any> {
    return this.http.get(this.endPoint + `${id}/ProductsCategories`);
  }

  getProductCategory(id: string): Observable<ProductCategory> {
    return this.http.get(this.endPoint + `ProductCategory/${id}`).pipe(map((res?: any) => {
      const productCategory = new ProductCategory({
        id: res.data.id,
        restaurantId: res.data.restaurantId,
        productCategoryName: res.data.productCategoryName,

        products: res.data.products.map((categoryProducts: any) => {
          return new Products({
            id: categoryProducts.id,
            restaurantId: categoryProducts.restaurantId,
            price: categoryProducts.price,
            productName: categoryProducts.productName,
            description: categoryProducts.description,
            productCategory: categoryProducts.productCategory = {
              id: categoryProducts.productCategory.id,
              productCategoryName: categoryProducts.productCategory.productCategoryName
            }
          });
        })
      });
      return productCategory;
    }));
  }

  createProductCategory(restaurantId: any, productCategory: any): Observable<any> {
    return this.http.post(this.endPoint + `Admin/${restaurantId}/CreateProductCategory`, productCategory);
  }

  updateProductCategory(id: string, productCategory: ProductCategoryAddEdit): Observable<any> {
    return this.http.put(this.endPoint + 'Admin/UpdateProductCategory/' + id, productCategory);
  }

  deleteProductCategory(id: string): Observable<any> {
    return this.http.delete(this.endPoint + 'Admin/DeleteProductCategory/' + id);
  }
}
