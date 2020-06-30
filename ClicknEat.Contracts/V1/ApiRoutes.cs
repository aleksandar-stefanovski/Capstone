﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1
{
    public static class ApiRoutes
    {
        public const string Root = "api";
        public const string Version = "v1";
        public const string Base = Root + "/"+ Version;

        public static class Restaurants
        {
            public const string Route = Base + "/[controller]";

            public const string GetAll = "";

            public const string Get = "{restaurantId}";

            public const string Create = "Admin/CreateRestaurant";

            public const string Update = "Admin/UpdateRestaurant/{restaurantId}";

            public const string Delete = "Admin/DeleteRestaurant/{restaurantId}";
        }

        public static class RestaurantsCategories
        {
            public const string GetAll = Base + "/RestaurantsCategories";

            public const string Get = Base + "/RestaurantCategory/RestaurantCategory/{restaurantCategoryId}";

            public const string Create = Base + "/Admin/CreateRestaurantsCategory";

            public const string Update = Base + "/Admin/RestaurantCategory/UpdateRestaurantCategory/{restaurantCategoryId}";

            public const string Delete = Base + "/Admin/RestaurantCategory/DeleteRestaurantCategory/{restaurantCategoryId}";
        }

        public static class Products
        {
            public const string GetAll = Base + "/Restaurant/{restaurantId}/Products";

            public const string Get = Base + "/Restaurant/{restaurantId}/Product/{productId}";

            public const string Create = Base + "/Admin/Restaurant/{restaurantId}/CreateProduct";

            public const string Update = Base + "/Admin/Restaurant/{restaurantId}/UpdateProduct/{productId}";

            public const string Delete = Base + "/Admin/Restaurant/{restaurantId}/DeleteProduct/{productId}";
        }

        public static class ProductsCategories
        {
            public const string GetAll = Base + "/Restaurant/{restaurantId}/ProductsCategories";

            public const string Get = Base + "/Restaurant/{restaurantId}/ProductCategory/{productCategoryId}";

            public const string Create = Base + "/Admin/Restaurant/{restaurantId}/CreateProductCategory";

            public const string Update = Base + "/Admin/Restaurant/{restaurantId}UpdateProductCategory/{productCategoryId}";

            public const string Delete = Base + "/Admin/Restaurant/{restaurantId}/DeleteProductCategory/{productCategoryId}";
        }

        public static class Cart
        {
            public const string Route = Base + "/[controller]";

            public const string Get = Base + "/{cartId}";

            public const string AddToCart = Base + "/{cartId}";

            public const string Create = Base + "";

        }

        public static class Identity 
        {
            public const string Login = Base + "/Identity/Login";

            public const string Register = Base + "/Identity/Register";

            public const string Refresh = Base + "/Identity/Refresh";
        }
    }
}