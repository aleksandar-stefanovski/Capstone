import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Products } from './products.model';
import { ProductCategories } from './product-categories.model';

export class Restaurant {
  id: string;
  restaurantName: string;
  description: string;
  products?: Products[];
  productCategories?: ProductCategories[];

  restaurantCategory: {
    id: string,
    restaurantCategoryName: string
  };

  constructor(params?: any) {
    this.id = params.id;
    this.restaurantName = params.restaurantName;
    this.description = params.description;
    this.productCategories = params.productCategories;
    this.products = params.products;

    this.restaurantCategory = {
      id: params.restaurantCategory.id,
      restaurantCategoryName: params.restaurantCategory.restaurantCategoryName
    };
  }
}
