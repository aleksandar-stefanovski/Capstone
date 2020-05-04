﻿using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Data;
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

        Task<List<Restaurant>> GetRestaurantAsync(Guid restaurantId);

        Task<bool> CreateRestaurantAsync(Restaurant restaurant);

        Task<Restaurant> GetRestaurantByIdAsync(Guid restaurantId);

        Task<bool> UpdateRestaurantAsync(Restaurant restaurantToUpdate);

        Task<bool> DeleteRestaurantAsync(Guid restaurantId);
    }
}