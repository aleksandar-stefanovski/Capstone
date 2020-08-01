import { Component, OnInit } from '@angular/core';
import { RestaurantCategoryService } from 'src/app/services/restaurant-category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RestaurantCategoryEdit } from './restaurant-category-edit.model';
import { RestaurantCategoryAdd } from '../restaurant-category-add/restaurant-category-add.model';

@Component({
  selector: 'app-restaurant-category-edit',
  templateUrl: './restaurant-category-edit.component.html',
  styleUrls: ['./restaurant-category-edit.component.scss']
})
export class RestaurantCategoryEditComponent implements OnInit {

  id: string;
  restaurantCategoryEdit: RestaurantCategoryEdit = new RestaurantCategoryEdit();
  restaurant: RestaurantCategoryAdd;

  constructor(private restaurantCategoryService: RestaurantCategoryService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  updateRestaurantCategory(id: string, restaurantCategoryEdit: RestaurantCategoryEdit) {
    console.log(this.restaurantCategoryEdit);
    this.restaurantCategoryService.updateRestaurantCategory(id, restaurantCategoryEdit).subscribe((res: any) => {
      this.restaurant = res;
      this.restaurantCategoryEdit = this.restaurant;
    });

  }

  onSubmit() {
    this.updateRestaurantCategory(this.id, this.restaurantCategoryEdit);
  }

  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
