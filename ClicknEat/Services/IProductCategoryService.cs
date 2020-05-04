using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public interface IProductCategoryService
    {
        Task<List<ProductCategory>> GetAllAsync(Guid restaurantId);

        Task<List<ProductCategory>> GetProductCategoryAsync(Guid restaurantId, Guid productCategoryId);

        Task<bool> CreateProductCategoryAsync(ProductCategory productCategory);

        Task<ProductCategory> GetProductCategoryByIdAsync(Guid restaurantId, Guid productCategoryId);

        Task<bool> UpdateProductCategoryAsync(ProductCategory productCategoryToUpdate);

        Task<bool> DeleteProductCategoryAsync(Guid restaurantId, Guid productCategoryId);
    }
}
