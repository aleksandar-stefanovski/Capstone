import { RestaurantsCategories } from './restaurantCategory.model';

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
export class RestaurantAdd {
  restaurantName: string;
  description: string;
  restaurantCategory: RestaurantsCategories;
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

// MAPPED RESTAURANT PRODUCTS CATEGORIES

// GET MAPPED RESTAURANT PRODUCTS
export class Products {
  id: string;
  productName: string;
  description: string;
  productCategory: {
    id: string,
    productCategoryName: string
  };

  constructor(params?: any) {
    this.id = params.id;
    this.productName = params.productName;
    this.description = params.description;
    this.productCategory = {
      id: params.productCategory.id,
      productCategoryName: params.productCategory.productCategoryName
    };
  }
}

// GET MAPPED PRODUCT CATEGORIES
export class ProductCategories {
  id: string;
  productCategoryName: string;

  constructor(params?: any) {
      this.id = params.id;
      this.productCategoryName = params.productCategoryName;
  }
}

// GET MAPPED PRODUCT CATEGORY
export class ProductCategory {
  id: string;
  productCategoryName: string;

  constructor(params?: any) {
      this.id = params.id;
      this.productCategoryName = params.productCategoryName;
  }
}


