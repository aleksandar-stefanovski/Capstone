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

        Task<ProductCategory> GetProductCategoryAsync(Guid productCategoryId);

        Task<bool> CreateProductCategoryAsync(ProductCategory productCategory);

        Task<ProductCategory> GetProductCategoryByIdAsync(Guid productCategoryId);

        Task<bool> UpdateProductCategoryAsync(ProductCategory productCategoryToUpdate);

        Task<bool> DeleteProductCategoryAsync(Guid productCategoryId);
    }
}
