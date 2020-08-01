/*using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public interface IShoppingCartService
    {
        public ShoppingCart GetCartAsync(IServiceProvider services);
        public Task<bool> AddToCartAsync(Product product, int quantity);
        public Task<int> RemoveFromCartAsync(Product product);
        public Task<List<ShoppingCartItem>> GetShoppingCartItemsAsync();
        public Task<bool> ClearCartAsync();
        public Task<int> GetShoppingCartTotalAsync();
    }
}
*/