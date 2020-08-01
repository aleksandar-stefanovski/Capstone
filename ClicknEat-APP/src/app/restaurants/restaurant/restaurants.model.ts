export class Restaurants {
    id: string;
    restaurantName: string;
    description: string;

    restaurantCategory: {
        id: string,
        restaurantCategoryName: string
    };

    constructor(params?: any) {
        this.id = params.id;
        this.restaurantName = params.restaurantName;
        this.description = params.description;

        this.restaurantCategory = {
            id: params.restaurantCategory.id,
            restaurantCategoryName: params.restaurantCategory.restaurantCategoryName
        };
    }
}
