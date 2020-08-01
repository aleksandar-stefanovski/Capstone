using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _context;

        public ProductService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetAllAsync(Guid restaurantId)
        {
            return await _context.Products
                .Where(x => x.Restaurant.Id == restaurantId).Include(c => c.ProductCategory)
                .ToListAsync();
        }

        public async Task<Product> GetProductAsync(Guid restaurantId, Guid productId)
        {
            return await _context.Products
                .Where(x => x.Restaurant.Id == restaurantId && x.Id == productId)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> CreateProductAsync(Product product)
        {
            await _context.Products
                .AddAsync(product);

            var created = await _context
                .SaveChangesAsync();

            return created > 0;
        }

        public async Task<Product> GetProductByIdAsync(Guid restaurantId, Guid productId)
        {
            return await _context.Products
                .Where(x => x.Restaurant.Id == restaurantId && x.Id == productId)
                .FirstOrDefaultAsync();
        }

        public async Task<Product> ProductByIdAsync(Guid productId)
        {
            return await _context.Products
                .Where(x => x.Id == productId)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateProductAsync(Product productToUpdate)
        {
            _context.Products
                .Update(productToUpdate);

            var updated = await _context
                .SaveChangesAsync();

            return updated > 0;
        }

        public async Task<bool> DeleteProductAsync(Guid restaurantId, Guid productId)
        {
            var product = await GetProductByIdAsync(restaurantId, productId);

            if (product == null)
                return false;

            _context
                .Remove(product);

            var deleted = await _context
                .SaveChangesAsync();

            return deleted > 0;
        }
    }
}
