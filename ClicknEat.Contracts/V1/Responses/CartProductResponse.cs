using System;
using System.Collections.Generic;
using System.Text;

namespace ClicknEat.Contracts.V1.Responses
{
    public class CartProductResponse
    {
        public Guid Id { get; set; }

        public string ProductName { get; set; }

        public string Description { get; set; }

        public int Price { get; set; }
    }
}
