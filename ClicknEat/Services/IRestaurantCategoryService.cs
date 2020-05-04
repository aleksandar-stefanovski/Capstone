using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public interface IRestaurantCategoryService
    {
        Task<List<RestaurantCategory>> GetAllAsync();

        Task<List<RestaurantCategory>> GetRestaurantCategoryAsync(Guid restaurantCategoryId);

        Task<bool> CreateRestaurantCategoryAsync(RestaurantCategory restaurantCategory);

        Task<RestaurantCategory> GetRestaurantCategoryByIdAsync(Guid restaurantCategoryId);

        Task<bool> UpdateRestaurantCategoryAsync(RestaurantCategory restaurantCategoryToUpdate);

        Task<bool> DeleteRestaurantCategoryAsync(Guid restaurantCategoryId);
    }
}
