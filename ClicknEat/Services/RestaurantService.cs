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

    }
}
