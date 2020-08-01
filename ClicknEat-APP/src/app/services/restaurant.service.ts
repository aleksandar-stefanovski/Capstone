import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/restaurants/restaurant-details/restaurant.model';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Products } from 'src/app/restaurants/restaurant-details/products.model';
import { ProductCategories } from 'src/app/restaurants/restaurant-details/product-categories.model';
import { map, filter, catchError } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ProductCategory } from 'src/app/restaurants/restaurant-details/product-category.model';
import { RestaurantAdd } from 'src/app/restaurants/restaurant-add/restaurant-add.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  endPoint = 'https://localhost:5001/api/v1/';


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
  }

  createRestaurant(restaurant: RestaurantAdd) {
    return this.http.post(this.endPoint + 'Restaurants/Admin/CreateRestaurant', restaurant);
  }

  updateRestaurant(id: string, restaurant: any): Observable<any> {
    return this.http.put(this.endPoint + 'Admin/UpdateRestaurant/' + id, JSON.stringify(restaurant));
  }

  deleteRestaurant(id: string): Observable<any> {
    return this.http.delete(this.endPoint + 'Restaurants/Admin/DeleteRestaurant/' + id);
  }
}
