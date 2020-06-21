import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant-details/restaurant.model';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Products } from './restaurant-details/products.model';
import { ProductCategories } from './restaurant-details/product-categories.model';
import { map, filter, catchError } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProductCategory } from './restaurant-details/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  endPoint = 'https://localhost:5001/api/v1/';

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get(this.endPoint + 'Restaurants');
  }

  getRestaurant(id: string): Observable<Restaurant> {
    return this.http.get(this.endPoint + 'Restaurants/' + id).pipe(map((res?: any) => {
      console.log(res);
      const restaurant = new Restaurant({
        id: res.data.id,
        restaurantName: res.data.restaurantName,
        description: res.data.description,
        restaurantCategory: res.data.restaurantCategory = {
          id: res.data.restaurantCategory.id,
          restaurantCategoryName: res.data.restaurantCategory.restaurantCategoryName
        },
        productCategories: res.data.productCategories.map(
          (productCategories: { id: any; productCategoryName: any }) => {
            return new ProductCategories({
              id: productCategories.id,
              productCategoryName: productCategories.productCategoryName
            });
          }),
        products: res.data.products.map(
          (products: { id: any; productName: any; description: any; productCategory: any; }) => {
            return new Products({
              id: products.id,
              productName: products.productName,
              description: products.description,
              productCategory: products.productCategory = {
                id: products.productCategory.id,
                productCategoryName: products.productCategory.productCategoryName
              }
            });
          })
      });
      console.log('From Service:', restaurant);
      return restaurant;
    })
    );
    // .pipe(
    //   map((response: any) => {
    //     console.log('vmro', response.data);
    //     // tslint:disable-next-line: whitespace
    //     // tslint:disable-next-line: no-angle-bracket-type-assertion
    //     return <any> response.data.map(data => {
    //       console.log('data', data);
    //       return new Restaurant({
    //         id: data.id,
    //         restaurantName: data.restaurantName,
    //         description: data.description,
    //         productCategory: data.productCategory.map(productCategory => {
    //           return new ProductCategory({
    //             id: productCategory.id,
    //             productCategoryName: productCategory.productCategoryName,
    //             products: productCategory.products.map(products => {
    //               return new Products({
    //                 id: products.id,
    //                 productName: products.productName,
    //                 description: products.description,
    //                 productCategories: products.productCategories.map(productCategories => {
    //                   return new ProductCategories({
    //                     id: productCategories.id,
    //                     categoryName: productCategories.categoryName
    //                   });
    //                 }) as any
    //               });
    //             }) as []
    //           });
    //         }) as []
    //       });
    //     });
    //   })
    // );
  }


  // createRestaurant(restaurant: any): Observable < any > {
  //   return this.http.post<any>(this.endPoint + 'Admin/CreateRestaurant', JSON.stringify(restaurant));
  // }

  // updateRestaurant(id: string, restaurant: any): Observable < any > {
  //   return this.http.put(this.endPoint + 'Admin/UpdateRestaurant/' + id, JSON.stringify(restaurant));
  // }

  // deleteRestaurant(id: string): Observable < any > {
  //   return this.http.delete(this.endPoint + 'Admin/DeleteRestaurant/' + id);

}
