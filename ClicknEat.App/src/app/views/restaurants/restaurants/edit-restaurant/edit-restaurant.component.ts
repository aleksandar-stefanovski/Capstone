import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RestaurantCategoryService } from '../../../../services/restaurant-category.service';
import { RestaurantService } from '../../../../services/restaurant.service';
import { RestaurantAddEdit } from '../../../../models/restaurant/restaurant.model';
import { RestaurantsCategories } from '../../../../models/restaurant/restaurantCategory.model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { httpHeaders } from '../../../../../environments/environment';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.scss']
})
export class EditRestaurantComponent implements OnInit {

  endPoint = 'https://localhost:5001/api/v1/';

  id: string;

  restaurantAddEdit: RestaurantAddEdit;
  restaurantCategories: RestaurantsCategories[];

  public restaurantName?: string;
  public description?: string;
  public restaurantImagePath?: string;
  public categoryToRestaurantRequest?: any;
  public isCreate?: boolean;
  public response?: { dbPath: '' };


  constructor(private http: HttpClient, private restaurantCategoryService: RestaurantCategoryService,
    private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isCreate = true;
    this.getRestaurantCategories();
  }

  getRestaurantCategories() {
    this.restaurantCategories = [];
    this.restaurantCategoryService.getRestaurantCategories().subscribe((res: any) => {
      this.restaurantCategories = res as RestaurantsCategories[];

      console.log('From Component getRestaurantCategories', this.restaurantCategories);
    });
  }

  public onUpdate = () => {

    const test = this.http.put(this.endPoint + 'Restaurants/Admin/UpdateRestaurant/' + this.id,
      JSON.stringify(this.restaurantAddEdit = {
        restaurantName: this.restaurantName,
        description: this.description,
        categoryToRestaurantRequest: this.categoryToRestaurantRequest,
        restaurantImagePath: this.response.dbPath
      }), httpHeaders()).subscribe(res => {
        this.goToRestaurants();
        this.isCreate = false;
      });

    console.log(this.restaurantAddEdit);
    return test;

  }

  // createRestaurant(restaurant: RestaurantAddEdit): Observable<any> {
  //   return this.http.post(this.endPoint + 'Restaurants/Admin/CreateRestaurant', JSON.stringify({
  //     restaurant
  //   }), httpHeaders());
  // }

  public uploadFinished = (event) => {
    this.response = event;
  }

  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
