using System;
using System.Collections.Generic;
using System.Text;

namespace ClicknEat.Contracts.V1.Responses
{
    public class OrderDetailResponse
    {
        public Guid Id { get; set; }

        public Guid OrderId { get; set; }

        public Guid ProductId { get; set; }

        public int Quantity { get; set; }

        public int Price { get; set; }

        public virtual ProductResponse Product { get; set; }

        public virtual OrderResponse Order { get; set; }
    }
}
