export class RestaurantsCategories {
    id: string;
    restaurantCategoryName: string;

    constructor(params?: any) {

        this.id = params.id;
        this.restaurantCategoryName = params.restaurantCategoryName;
    }
}
