using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class RestaurantService : IRestaurantService
    {

        private readonly ApplicationDbContext _context;

        public RestaurantService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Restaurant>> GetAllAsync()
        {
            return await  _context.Restaurants
                .Include(x => x.RestaurantCategory)
                .ToListAsync();
        }

        public async Task<List<Restaurant>> GetRestaurantAsync(Guid restaurantId)
        {
            return await _context.Restaurants
                .Where(x => x.Id == restaurantId)
                .Include(x => x.Products)
                .ToListAsync();
        }

        public async Task<bool> CreateRestaurantAsync(Restaurant restaurant)
        {
            await _context.Restaurants
                .AddAsync(restaurant);

            var created = await _context
                .SaveChangesAsync();

            return created > 0;
        }

        public async Task<Restaurant> GetRestaurantByIdAsync(Guid restaurantId)
        {
            return await _context.Restaurants
                .Where(x => x.Id == restaurantId)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateRestaurantAsync(Restaurant restaurantToUpdate)
        {
            _context.Restaurants
                .Update(restaurantToUpdate);

            var updated = await _context
                .SaveChangesAsync();

            return updated > 0;
        }

        public async Task<bool> DeleteRestaurantAsync(Guid restaurantId)
        {
            var restaurant = await _context.Restaurants
                .Where(x => x.Id == restaurantId)
                .Include(p => p.Products)
                .FirstOrDefaultAsync();

            if (restaurant == null)
                return false;

            if (restaurant.Products
                .Any(p => p.RestaurantId == restaurantId))
                return false;

            else if (!restaurant.Products
                .Any(p => p.RestaurantId == restaurantId)){

                _context
                    .Remove(restaurant);
            }

            var deleted = await _context
                .SaveChangesAsync();

            return deleted > 0;
        }
    }
}
