using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
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

        public async Task<List<Restaurant>> GetAllAsync(string restaurantName)
        {
            var query = _context.Restaurants.AsQueryable();

            if(!string.IsNullOrEmpty(restaurantName))
            {
                query = query
                    .Where(x => x.RestaurantName == restaurantName);
            }

            return await  query
                .Include(x => x.RestaurantCategory)
                .ToListAsync();
        }

        public async Task<Restaurant> GetRestaurantAsync(Guid restaurantId)
        {
            return await _context.Restaurants
                .Where(x => x.Id == restaurantId)
                .Include(rc => rc.RestaurantCategory)
                .Include(ct => ct.ProductCategories)
                .Include(p => p.Products)
                .ThenInclude(c => c.ProductCategory)
                .FirstOrDefaultAsync();
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
