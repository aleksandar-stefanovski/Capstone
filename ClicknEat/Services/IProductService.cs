using ClicknEat.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public interface IProductService
    {
        Task<List<Product>> GetAllAsync(Guid restaurantId);

        Task<Product> GetProductAsync(Guid productId);

        Task<bool> CreateProductAsync(Product product);

        Task<Product> GetProductByIdAsync(Guid productId);

        Task<Product> ProductByIdAsync(Guid productId);

        Task<bool> UpdateProductAsync(Product productToUpdate);

        Task<bool> DeleteProductAsync(Guid productId);
    }
}
