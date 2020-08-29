import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { RestaurantCategory, CategoryRestaurants, RestaurantCategoryEdit } from '../models/restaurant/restaurantCategory.model';

@Injectable({
  providedIn: 'root'
})

export class RestaurantCategoryService {
  constructor(private http: HttpClient) { }
  endPoint = 'https://localhost:5001/api/v1/';

  getRestaurantCategories(): Observable<any> {
    return this.http.get(this.endPoint + 'RestaurantsCategories');
  }

  getRestaurantCategory(id: string): Observable<RestaurantCategory> {
    return this.http.get(this.endPoint + 'RestaurantCategory/' + id).pipe(map((res?: any) => {
      const restaurantCategory = new RestaurantCategory({
        id: res.data.id,
        restaurantCategoryName: res.data.restaurantCategoryName,

        categoryRestaurants: res.data.restaurants.map((categoryRestaurants: any) => {
          return new CategoryRestaurants({
            id: categoryRestaurants.id,
            restaurantName: categoryRestaurants.restaurantName,
            description: categoryRestaurants.description,
            restaurantCategory: categoryRestaurants.restaurantCategory = {
              id: categoryRestaurants.restaurantCategory.id,
              restaurantCategoryName: categoryRestaurants.restaurantCategory.restaurantCategoryName
            }
          });
        })
      });
      return restaurantCategory;
    }));
  }

  createRestaurantCategory(restaurantCategory: any): Observable<any> {
    return this.http.post(this.endPoint + 'Admin/CreateRestaurantsCategory', restaurantCategory);
  }

  updateRestaurantCategory(id: string, restaurantCategory: RestaurantCategoryEdit): Observable<any> {
    return this.http.put(this.endPoint + 'Admin/RestaurantCategory/UpdateRestaurantCategory/' + id, restaurantCategory);
  }

  deleteRestaurantCategory(id: string): Observable<any> {
    return this.http.delete(this.endPoint + 'Admin/RestaurantCategory/DeleteRestaurantCategory/' + id);
  }
}
