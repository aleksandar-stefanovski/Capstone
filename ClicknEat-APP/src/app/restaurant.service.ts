import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  endPoint = 'https://localhost:5001/api/v1/';

  constructor(private http: HttpClient) { }

  getRestaurants(): Observable<any> {
    return this.http.get(this.endPoint + 'Restaurants');
  }

  getRestaurant(id: string): Observable<any> {
    return this.http.get(this.endPoint + 'Restaurants/' + id);
  }

  createRestaurant(restaurant: any): Observable<any> {
    return this.http.post<any>(this.endPoint + 'Admin/CreateRestaurant', JSON.stringify(restaurant));
  }

  updateRestaurant(id: string, restaurant: any): Observable<any> {
    return this.http.put(this.endPoint + 'Admin/UpdateRestaurant/' + id , JSON.stringify(restaurant));
  }

  deleteRestaurant(id: string): Observable<any> {
    return this.http.delete(this.endPoint + 'Admin/DeleteRestaurant/' + id);
  }
}
