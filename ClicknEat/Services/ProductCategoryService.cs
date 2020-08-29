using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class ProductCategoryService : IProductCategoryService
    {
        private readonly ApplicationDbContext _context;

        public ProductCategoryService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<ProductCategory>> GetAllAsync(Guid restaurantId)
        {
            return await _context.ProductCategories
                        .Where(x => x.RestaurantId == restaurantId)
                        .ToListAsync();
        }

        public async Task<ProductCategory> GetProductCategoryAsync(Guid productCategoryId)
        {
            return await _context.ProductCategories
                .Where(x => x.RestaurantId == x.Restaurant.Id && x.Id == productCategoryId)
                .Include(x => x.Products)
                .FirstOrDefaultAsync();
        }

        public async Task<bool> CreateProductCategoryAsync(ProductCategory productCategory)
        {
            await _context.ProductCategories
                .AddAsync(productCategory);

            var created = await _context
                .SaveChangesAsync();

            return created > 0;
        }

        public async Task<ProductCategory> GetProductCategoryByIdAsync(Guid productCategoryId)
        {
            return await _context.ProductCategories
                        .Where(x => x.RestaurantId == x.Restaurant.Id && x.Id == productCategoryId)
                        .FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateProductCategoryAsync(ProductCategory productCategoryToUpdate)
        {
            _context.ProductCategories
                .Update(productCategoryToUpdate);

            var updated = await _context
                .SaveChangesAsync();

            return updated > 0;

        }

        public async Task<bool> DeleteProductCategoryAsync(Guid productCategoryId)
        {
            var productCategory = await _context.ProductCategories
                .Where(x => x.RestaurantId == x.Restaurant.Id && x.Id == productCategoryId)
                .Include(p => p.Products)
                .FirstOrDefaultAsync();

            if (productCategory == null)
                return false;

            if (productCategory.Products
                .Any(p => p.ProductCategory.Id == productCategoryId))
                return false;

            else if (!productCategory.Products
                .Any(p => p.ProductCategory.Id == productCategoryId))
            {
                _context
                    .Remove(productCategory);
            }

            _context.Remove(productCategory);
            var deleted = await _context.SaveChangesAsync();

            return deleted > 0;
        }
    }
}
