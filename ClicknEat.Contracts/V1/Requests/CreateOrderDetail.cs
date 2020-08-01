using System;
using System.Collections.Generic;
using System.Text;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CreateOrderDetail
    {
        public Guid Id { get; set; }

        public Guid OrderId { get; set; }

        public Guid ProductId { get; set; }

        public int Quantity { get; set; }

        public int Price { get; set; }
    }
}
