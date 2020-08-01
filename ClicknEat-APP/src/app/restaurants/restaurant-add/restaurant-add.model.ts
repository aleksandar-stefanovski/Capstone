import { RestaurantsCategories } from '../restaurant/restaurantsCategories.model';

export class RestaurantAdd {
    restaurantName: string;
    description: string;
    restaurantCategory: {} = RestaurantsCategories;
}
