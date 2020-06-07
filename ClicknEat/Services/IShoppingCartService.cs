/*using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public interface IShoppingCartService
    {
        *//*ShoppingCart GetCart(IServiceProvider services);*//*
        Task<bool> AddToCartAsync(Product product, int quantity);
        Task<ShoppingCart> CreateCartAsync(ShoppingCart cart);

        *//*Task<bool> AddToCartAsync(ShoppingCartItem shoppingCart);*/
        /*
                Task<int> RemoveCartAsync(Product product);

                Task<bool> ClearShoppingCartAsync();

                *//*Task<List<ShoppingCartItem>> GetCartItemsAsync();*//*

                decimal GetShoppingCartTotal();*//*
    }
}
*/