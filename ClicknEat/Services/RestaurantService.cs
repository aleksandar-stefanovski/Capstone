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
            return await  _context.Restaurants.ToListAsync();
        }

        public async Task<Restaurant> GetRestaurantAsync(Guid restaurantId)
        {
            return await _context.Restaurants.Where(x => x.Id == restaurantId).FirstOrDefaultAsync();
        }

        public async Task<bool> CreateRestaurantAsync(Restaurant restaurant)
        {
            await _context.Restaurants.AddAsync(restaurant);

            var created = await _context.SaveChangesAsync();

            return created > 0;
        }

        public async Task<Restaurant> GetRestaurantByIdAsync(Guid restaurantId)
        {
            return await _context.Restaurants.Where(x => x.Id == restaurantId).FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateRestaurantAsync(Restaurant restaurantToUpdate)
        {
            _context.Restaurants.Update(restaurantToUpdate);

            var updated = await _context.SaveChangesAsync();

            return updated > 0;
        }

        public async Task<bool> DeleteRestaurantAsync(Guid restaurantId)
        {
            var restaurant = await GetRestaurantByIdAsync(restaurantId);

            if (restaurant == null)
                return false;

            _context.Remove(restaurant);
            var deleted = await _context.SaveChangesAsync();

            return deleted > 0;
        }

    }
}
