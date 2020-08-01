using ClicknEat.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Domain
{
    public class ShoppingCart
    {
        private readonly ApplicationDbContext _context;

        private ShoppingCart(ApplicationDbContext context)
        {
            _context = context;
        }

        public string Id { get; set; }

        public string UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        public IdentityUser User { get; set; }

        public ICollection<ShoppingCartItem> ShoppingCartItems { get; set; }

        //////////////
        // Methods //
       //////////////

        public static ShoppingCart GetCartAsync(IServiceProvider services)
        {
            ISession session = services.GetRequiredService<IHttpContextAccessor>()?
                .HttpContext.Session;

            var context = services.GetService<ApplicationDbContext>();

            string cartId = session.GetString("CartId") ?? Guid.NewGuid().ToString();

            session.SetString("CartId", cartId);

            return new ShoppingCart(context) { Id = cartId };
        }

        public async Task<bool> AddToCartAsync(Product product, int quantity)
        {
            var shoppingCartItem = await _context
                .ShoppingCartItems
                .SingleOrDefaultAsync(x => x.Product.Id == product.Id 
                && x.ShoppingCartId == Id);

            if (shoppingCartItem == null)
            {
                shoppingCartItem = new ShoppingCartItem
                {
                    Id = new Guid(),
                    ShoppingCartId = Id,
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
                && x.ShoppingCartId == Id);

            var localQunatity = 0;

            if(shoppingCartItem != null)
            {
                if(shoppingCartItem.Quantity > 1)
                {
                    shoppingCartItem.Quantity --;
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

        public async Task<List<ShoppingCartItem>> GetShoppingCartItemsAsync()
        {
            return (List<ShoppingCartItem>)(ShoppingCartItems ??=
                await _context.ShoppingCartItems
                .Where(x => x.ShoppingCartId == Id)
                .Include(p => p.Product)
                .ToListAsync());
        }

        /*public async Task<bool> ClearCartAsync(IServiceProvider services)
        {
            var cartItems = _context
                .ShoppingCartItems
                .Where(cart => cart.ShoppingCartId == Id);

            ISession session = services.GetRequiredService<IHttpContextAccessor>()?
                .HttpContext.Session;

            var test = session.IsAvailable;

            if (!test) 
                _context.ShoppingCartItems
          .RemoveRange(cartItems);
                var removed = await _context
               .SaveChangesAsync();
                return removed > 0;
        }*/

        public async Task<int> GetShoppingCartTotalAsync()
        {
            var total = await _context.ShoppingCartItems
                .Where(x => x.ShoppingCartId == Id)
                .Select(p => p.Product.Price * p.Quantity)
                .SumAsync();

            return total;
        }
    }
}
