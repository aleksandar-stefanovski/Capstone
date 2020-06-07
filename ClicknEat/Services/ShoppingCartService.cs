/*using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class ShoppingCartService : IShoppingCartService
    {
        private readonly ApplicationDbContext _context;
        private readonly ShoppingCart _shoppingCart;

        public ShoppingCartService(ApplicationDbContext context, ShoppingCart shoppingCart)
        {
            _context = context;
            _shoppingCart = shoppingCart;
        }

       *//* public Task GetCart(IServiceProvider services)
        {
            ISession session = services.GetRequiredService<IHttpContextAccessor>()?
                .HttpContext.Session;

            var context = services.GetService<ApplicationDbContext>();
            string cartId = session.GetString("CartId") ?? Guid.NewGuid().ToString();

            session.SetString("CartId", cartId);

            return new { Shopping_shoppingCart = cartId };
        }*//*

        public async Task<bool> CreateCartAsync(ShoppingCart shoppingCart)
        {
            await _context.ShoppingCart
                .AddAsync(shoppingCart);

            var created = await _context
                .SaveChangesAsync();

            return created > 0;
        }

        public async Task<bool> AddToCartAsync(Product product, int quantity)
        {

            var shoppingCartItem = _context.ShoppingCartItems
                .SingleOrDefault(x => x.Product.Id == product.Id && x.ShoppingCart.Id == _shoppingCart.Id);

            if (shoppingCartItem == null)
            {
                shoppingCartItem = new ShoppingCartItem
                {
                    ShoppingCartId = _shoppingCart.Id,
                    Product = product,
                    Quantity = quantity
                };
                await _context.ShoppingCartItems
                   .AddAsync(shoppingCartItem);
            }
            else
            {
                shoppingCartItem.Quantity++;
            }

            var created = await _context
         .SaveChangesAsync();

            return created > 0;
        }

       *//* public async Task<int> RemoveCartAsync(Product product)
        {
            var shoppingCartItem = _context.ShoppingCartItems
                .SingleOrDefault(s => s.Product.Id == product.Id && s.Id == ShoppingCart.Id);

            var localAmount = 0;

            if (shoppingCartItem != null)
            {
                if (shoppingCartItem.Amount > 1)
                {
                    shoppingCartItem.Amount--;
                    localAmount = shoppingCartItem.Amount;
                }
                else
                {
                    _context.ShoppingCartItems
                        .Remove(shoppingCartItem);
                }
            }

            await _context
                .SaveChangesAsync();

            return localAmount;
        }

        public async Task<bool> ClearShoppingCartAsync()
        {
            var cartItems = _context.ShoppingCartItems
                .Where(c => c.Id == ShoppingCart.Id);

            _context.ShoppingCartItems.RemoveRange(cartItems);

            var deleted = await _context
                .SaveChangesAsync();

            return deleted > 0;
        }

        public decimal GetShoppingCartTotal()
        {
            return _context.ShoppingCartItems
                .Where(x => x.Id == ShoppingCart.Id)
                .Select(s => s.Product.Price * s.Amount)
                .Sum();
        }*//*
    }
}
*/