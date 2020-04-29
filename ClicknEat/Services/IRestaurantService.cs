using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public interface IRestaurantService
    {
        Task<List<Restaurant>> GetAllAsync();

        Task<Restaurant> GetRestaurantAsync(Guid restaurantId);

        Task<bool> CreateRestaurantAsync(Restaurant restaurant);
    }
}
