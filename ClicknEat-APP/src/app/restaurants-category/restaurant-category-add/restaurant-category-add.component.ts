import { Component, OnInit } from '@angular/core';
import { RestaurantCategoryService } from 'src/app/services/restaurant-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantCategoryAdd } from './restaurant-category-add.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restaurant-category-add',
  templateUrl: './restaurant-category-add.component.html',
  styleUrls: ['./restaurant-category-add.component.scss']
})
export class RestaurantCategoryAddComponent implements OnInit {

  restaurantCategoryAdd: RestaurantCategoryAdd = new RestaurantCategoryAdd();

  constructor(private restaurantCategoryService: RestaurantCategoryService,
    private router: Router) { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.restaurantCategoryAdd = {
      id: null,
      restaurantCategoryName: ''
    };
  }

  createRestaurant(form: NgForm) {
    this.restaurantCategoryService.createRestaurantCategory(form.value).subscribe(res => {
      this.resetForm(form);
      this.goToRestaurants();
    });

    console.log(this.restaurantCategoryAdd);
  }


  onSubmit(form: NgForm) {
      this.createRestaurant(form);
  }

  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
}
