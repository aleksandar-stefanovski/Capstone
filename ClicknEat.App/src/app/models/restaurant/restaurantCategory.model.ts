// GET RESTAURANT CATEGORIES
export class RestaurantsCategories {
    id: string;
    restaurantCategoryName: string;

    constructor(params?: any) {

        this.id = params.id;
        this.restaurantCategoryName = params.restaurantCategoryName;
    }
}

// GET RESTAURANT CATEGORY
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

// GET RESTAURANTS FROM A CATEGORY
export class CategoryRestaurants {
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
//////

// CREATE RESTAURANT CATEGORY
export class RestaurantCategoryAdd {
    id: string;
    restaurantCategoryName: string;
}

// EDIT RESTAURANT CATEGORY
export class RestaurantCategoryEdit {
    id: string;
    restaurantCategoryName: string;
}
