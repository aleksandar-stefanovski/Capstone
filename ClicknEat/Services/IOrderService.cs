using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Data;
using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Controllers.V1
{
    public interface IOrderService
    {
      Task<bool> CreateOrder(Order order);

      Task<List<Order>> GetOrdersAsync();

      Task<List<Order>> GetMyOrdersAsync(string userId);

      Task<Order> GetByIdAsync(Guid orderId);

      Task<Order> GetOrderByIdAsync(Guid orderId);

      Task<bool> RemoveOrderAsync(Guid orderId);

      Task<bool> UserOwnsOrdersAsync(string userId);
    }
}