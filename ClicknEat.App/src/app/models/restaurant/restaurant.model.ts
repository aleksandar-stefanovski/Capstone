import { RestaurantsCategories, CategoryRestaurants } from './restaurantCategory.model';

// GET RESTAURANTS
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

// CREATE RESTAURANT
export class RestaurantAddEdit {
  restaurantName: string;
  description: string;
  categoryToRestaurantRequest: RestaurantsCategories;
}

// GET RESTAURANT
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

export class Products {
  id: any;
  restaurantId: string;
  productName: string;
  price: number;
  description: string;
  productCategory: {
    id: string,
    productCategoryName: string
  };

  constructor(params?: any) {
    this.id = params.id;
    this.productName = params.productName;
    this.price = params.price;
    this.description = params.description;

    this.productCategory = {
      id: params.productCategory.id,
      productCategoryName: params.productCategory.productCategoryName
    };
  }
}

export class ProductCategories {
  id: string;
  productCategoryName: string;

  constructor(params?: any) {
    this.id = params.id;
    this.productCategoryName = params.productCategoryName;
  }
}

export class ProductCategory {
  id: string;
  restaurantId: any;
  productCategoryName: string;
  products?: Products[];


  constructor(params?: any) {
    this.id = params.id;
    this.restaurantId = params.restaurantId;
    this.productCategoryName = params.productCategoryName;
    this.products = params.products;
  }
}


