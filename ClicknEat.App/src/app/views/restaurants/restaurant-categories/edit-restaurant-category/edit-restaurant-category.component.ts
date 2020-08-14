import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantCategoryEdit } from '../../../../models/restaurant/restaurantCategory.model';
import { RestaurantCategoryService } from '../../../../services/restaurant-category.service';

@Component({
  selector: 'app-edit-restaurant-category',
  templateUrl: './edit-restaurant-category.component.html',
  styleUrls: ['./edit-restaurant-category.component.scss']
})
export class EditRestaurantCategoryComponent implements OnInit {

  id: string;
  restaurantCategoryEdit: RestaurantCategoryEdit = new RestaurantCategoryEdit();

  constructor(private restaurantCategoryService: RestaurantCategoryService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.restaurantCategoryEdit = {
      id: null,
      restaurantCategoryName: ''
    };
  }

  editRestaurant(form: NgForm) {
    this.restaurantCategoryService.updateRestaurantCategory(this.id, form.value).subscribe(res => {
      this.resetForm(form);
      this.goToRestaurantCat();
    });

    console.log(this.restaurantCategoryEdit);
  }


  onSubmit(form: NgForm) {
    this.editRestaurant(form);
  }

  goToRestaurantCat() {
    this.router.navigate(['/restaurant-categories']);
  }
}
