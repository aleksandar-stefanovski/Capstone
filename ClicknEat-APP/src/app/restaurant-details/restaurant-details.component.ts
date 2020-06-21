import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from './products.model';
import { Restaurant } from './restaurant.model';
import { map, find } from 'rxjs/operators';
import { ProductCategories } from './product-categories.model';
import { ProductCategory } from './product-category.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})

export class RestaurantDetailsComponent implements OnInit {

  id: string;
  restaurant: Restaurant;
  productCategory: ProductCategory;
  products: Products[];
  productCategories: ProductCategories[];

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getRestaurant();
  }

  getRestaurant() {
    this.restaurantService.getRestaurant(this.id).subscribe((res: any) => {
      this.restaurant = res as Restaurant;
      this.products = res.products as Products[];
      this.productCategories = res.productCategories as ProductCategories[];
      this.productCategory = res.productCategory as ProductCategory;

      console.log('From Component', this.restaurant, this.products);
    });
  }
}


  // ShowMenu(catId: string) {
  //   this.findData = this.productCategory.find(j => j.id === catId);
  //   if (typeof this.findData === 'undefined') {
  //     console.log(this.findData);
  //     return null;
  //   }
  //   console.log(this.findData);
  //   return this.findData;
  // }

