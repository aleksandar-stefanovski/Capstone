import { CategoryRestaurants } from './category-restaurants.model';

export class RestaurantCategory {

  id: string;
  restaurantCategoryName: string;
  categoryRestaurants?: CategoryRestaurants[];

  constructor(params?: any) {
    this.id = params.id;
    this.restaurantCategoryName = params.restaurantCategoryName;
    this.categoryRestaurants = params.categoryRestaurants;
  }
}
