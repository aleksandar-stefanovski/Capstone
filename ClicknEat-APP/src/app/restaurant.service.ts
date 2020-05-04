import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseUrl: string = 'https://localhost:5001/api/v1/Restaurants';
  constructor(private http:HttpClient) { }

  getRestaurant()
  {
    return this.http.get(this.baseUrl);
  }
}
