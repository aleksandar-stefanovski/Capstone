/*using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class ShoppingCartService
    {
        private readonly ApplicationDbContext _context;
        private readonly ShoppingCart _shoppingCart;

        public ShoppingCartService(ApplicationDbContext context, ShoppingCart shoppingCart)
        {
            _context = context;
            _shoppingCart = shoppingCart;
        }

      *//*  public ShoppingCart GetCartAsync(IServiceProvider services)
        {
            ISession session = services.GetRequiredService<IHttpContextAccessor>()?
                .HttpContext.Session;

            var context = services.GetService<ApplicationDbContext>();

            string cartId = session.GetString("CartId") ?? Guid.NewGuid().ToString();

            session.SetString("CartId", cartId);

            return new ShoppingCart(context) { Id = cartId };
        }*//*

        public async Task<bool> AddToCartAsync(Product product, int quantity)
        {
            var shoppingCartItem = await _context
                .ShoppingCartItems
                .SingleOrDefaultAsync(x => x.Product.Id == product.Id
                && x.ShoppingCartId == _shoppingCart.Id);

            if (shoppingCartItem == null)
            {
                shoppingCartItem = new ShoppingCartItem
                {
                    Id = new Guid(),
                    ShoppingCartId = _shoppingCart.Id,
                    Product = product,
                    Quantity = quantity
                };

                _context.ShoppingCartItems
                    .Add(shoppingCartItem);
            }
            else
            {
                shoppingCartItem.Quantity++;
            }

            var created = await _context
                  .SaveChangesAsync();

            return created > 0;
        }


        public async Task<int> RemoveFromCartAsync(Product product)
        {
            var shoppingCartItem = await _context
                .ShoppingCartItems
                .SingleOrDefaultAsync(x => x.Product.Id == product.Id
                && x.ShoppingCartId == _shoppingCart.Id);

            var localQunatity = 0;

            if (shoppingCartItem != null)
            {
                if (shoppingCartItem.Quantity > 1)
                {
                    shoppingCartItem.Quantity--;
                    localQunatity = shoppingCartItem.Quantity;
                }
                else
                {
                    _context.ShoppingCartItems
                        .Remove(shoppingCartItem);
                }
            }
            _context.SaveChanges();

            return localQunatity;
        }

        // METHODS

        public async Task<List<ShoppingCartItem>> GetShoppingCartItemsAsync()
        {
            return (List<ShoppingCartItem>)(_shoppingCart.ShoppingCartItems ??=
                await _context.ShoppingCartItems
                .Where(x => x.ShoppingCartId == _shoppingCart.Id)
                .Include(p => p.Product)
                .ToListAsync());
        }

        public async Task<bool> ClearCartAsync()
        {
            var cartItems = _context
                .ShoppingCartItems
                .Where(cart => cart.ShoppingCartId == _shoppingCart.Id);

            _context.ShoppingCartItems
                .RemoveRange(cartItems);

            var removed = await _context
                .SaveChangesAsync();

            return removed > 0;
        }

        public async Task<int> GetShoppingCartTotalAsync()
        {
            var total = await _context.ShoppingCartItems
                .Where(x => x.ShoppingCartId == _shoppingCart.Id)
                .Select(p => p.Product.Price * p.Quantity)
                .SumAsync();

            return total;
        }
    }
}
*/