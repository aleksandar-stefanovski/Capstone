using ClicknEat.Controllers.V1;
using ClicknEat.Data;
using ClicknEat.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class OrderService : IOrderService
    {
        private readonly ApplicationDbContext _context;
        private readonly ShoppingCart _shoppingCart;

        public OrderService(ApplicationDbContext context, ShoppingCart shoppingCart)
        {
            _context = context;
            _shoppingCart = shoppingCart;
        }
       
         public async Task<List<Order>> GetOrdersAsync()
        {
            var orders = await _context.Orders
               .Include(x => x.OrderDetails)
               .ThenInclude(p => p.Product)
               .ToListAsync();

            if (orders == null)
            {
                return null;
            }

            return orders;
        }

        public async Task<List<Order>> GetMyOrdersAsync(string userId)
        {
            var orders = await _context.Orders
               .AsNoTracking()
               .Where(x => x.UserId == userId)
               .Include(o => o.OrderDetails)
               .ThenInclude(p => p.Product)
               .ToListAsync();

            if (orders == null)
            {
                return null;
            }

            foreach (var item in orders)
            {
                if (item.UserId != userId)
                {
                    return null;
                }
            }

            return orders;
        }

        public async Task<Order> GetOrderByIdAsync(Guid orderId)
        {
            var order = await _context.Orders
               .Where(x => x.Id == orderId)
               .FirstOrDefaultAsync();

            if (order == null)
            {
                return null;
            }

            return order;
        }

        public async Task<Order> GetByIdAsync(Guid orderId)
        {
            var order = await _context.Orders
               .Where(x => x.Id == orderId)
               .Include(d=>d.OrderDetails)
               .ThenInclude(p=>p.Product)
               .FirstOrDefaultAsync();

            if (order == null)
            {
                return null;
            }

            return order;
        }

        public async Task<bool> CreateOrder(Order order)
        {
            await _context.Orders.AddAsync(order);

            var shoppingCartItems = _shoppingCart
                .GetShoppingCartItemsAsync();

            foreach (var item in shoppingCartItems.Result)
            {
                var orderDetail = new OrderDetail()
                {
                    Quantity = item.Quantity,
                    ProductId = item.Product.Id,
                    OrderId = order.Id,
                    Price = item.Product.Price,
                };

                await _context.OrderDetails
                    .AddAsync(orderDetail);
            }

            var created = await _context
                .SaveChangesAsync();

            return created > 0;
        }

        public async Task<bool> RemoveOrderAsync(Guid orderId)
        {
            var order = await _context.Orders
               .Where(x => x.Id == orderId)
               .FirstOrDefaultAsync();

            if (order == null)
                return false;

                _context
                    .Remove(order);

            var deleted = await _context
                .SaveChangesAsync();

            return deleted > 0;
        }

        public async Task<bool> UserOwnsOrdersAsync(string userId)
        {
            var orders = await _context.Orders
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync();

            if (orders == null)
            {
                return false;
            }

            foreach (var item in orders)
            {
                if (item.UserId != userId)
                {
                    return false;
                }
            }

            return true;
        }
    }
}
