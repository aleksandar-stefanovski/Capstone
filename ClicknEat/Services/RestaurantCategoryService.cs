using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class RestaurantCategoryService : IRestaurantCategoryService
    {
        private readonly ApplicationDbContext _context;

        public RestaurantCategoryService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<RestaurantCategory>> GetAllAsync()
        {
            return await _context.RestaurantCategories.ToListAsync();
        }

        public async Task<RestaurantCategory> GetRestaurantCategoryAsync(Guid restaurantCategoryId)
        {
            return await _context.RestaurantCategories
                .Where(x => x.Id == restaurantCategoryId)
                .Include(x => x.Restaurants)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> CreateRestaurantCategoryAsync(RestaurantCategory restaurantCategory)
        {
            await _context.RestaurantCategories
                .AddAsync(restaurantCategory);

            var created = await _context
                .SaveChangesAsync();

            return created > 0;
        }

        public async Task<RestaurantCategory> GetRestaurantCategoryByIdAsync(Guid restaurantCategoryId)
        {
            return await _context.RestaurantCategories
                .Where(x => x.Id == restaurantCategoryId)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateRestaurantCategoryAsync(RestaurantCategory restaurantCategoryToUpdate)
        {
            _context.RestaurantCategories
                .Update(restaurantCategoryToUpdate);

            var updated = await _context
                .SaveChangesAsync();

            return updated > 0;
        }

        public async Task<bool> DeleteRestaurantCategoryAsync(Guid restaurantCategoryId)
        {
            var restaurantCategory = await _context.RestaurantCategories
                .Where(x => x.Id == restaurantCategoryId)
                .Include(r => r.Restaurants)
                .FirstOrDefaultAsync();

            if (restaurantCategory == null)
                return false;

            if (restaurantCategory.Restaurants
                .Any(r => r.RestaurantCategory.Id == restaurantCategoryId))
                return false;

            else if (!restaurantCategory.Restaurants
                .Any(r => r.RestaurantCategory.Id == restaurantCategoryId))
            {
                _context
                    .Remove(restaurantCategory);
            }

            _context.Remove(restaurantCategory);

            var deleted = await _context.SaveChangesAsync();

            return deleted > 0;
        }
    }
}
