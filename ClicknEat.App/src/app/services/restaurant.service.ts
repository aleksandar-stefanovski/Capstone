import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { Products, ProductCategories, Restaurant, RestaurantAddEdit } from '../models/restaurant/restaurant.model';
import { httpHeaders } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private router: Router, private http: HttpClient) { }

  endPoint = 'https://localhost:5001/api/v1/';

  getRestaurants() {
    return this.http.get(this.endPoint + 'Restaurants');
  }

  getRestaurant(id: string): Observable<Restaurant> {

    return this.http.get(this.endPoint + 'Restaurants/' + id).pipe(map((res?: any) => {
      const restaurant = new Restaurant({
        id: res.data.id,
        restaurantName: res.data.restaurantName,
        restaurantImagePath: res.data.restaurantImagePath,
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
          (products: { id: any; productName: any; description: any; price: any; productCategory: any; imagePath: any; }) => {
            return new Products({
              id: products.id,
              productName: products.productName,
              description: products.description,
              imagePath: products.imagePath,
              price: products.price,
              productCategory: products.productCategory = {
                id: products.productCategory.id,
                productCategoryName: products.productCategory.productCategoryName
              }
            });
          })
      });
      return restaurant;
    })
    );
  }

  // createRestaurant(restaurant: RestaurantAddEdit): Observable<any> {
  //   return this.http.post(this.endPoint + 'Restaurants/Admin/CreateRestaurant', JSON.stringify({
  //     restaurant
  //   }), httpHeaders());
  // }

  // updateRestaurant(id: string, restaurant: RestaurantAddEdit): Observable<any> {
  //   console.log(httpHeaders(), 'Restaurant', restaurant);
  //   return this.http.put(this.endPoint + 'Restaurants/Admin/UpdateRestaurant/' + id, JSON.stringify({
  //     restaurantName: restaurant.restaurantName,
  //     description: restaurant.description,
  //     categoryToRestaurantRequest: restaurant.categoryToRestaurantRequest
  //   }), httpHeaders());
  // }

  deleteRestaurant(id: string): Observable<any> {
    return this.http.delete(this.endPoint + 'Restaurants/Admin/DeleteRestaurant/' + id);
  }

  // uploadImage(formData: any): Observable<any> {
  //   return this.http.post(this.endPoint + 'Admin/Upload',
  //     JSON.stringify(formData), httpHeaders());

  // }

}
