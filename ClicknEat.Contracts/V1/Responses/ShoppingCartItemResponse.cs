using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class ShoppingCartItemResponse
    {
        public Guid Id { get; set; }

        public int Quantity { get; set; }

        public CartProductResponse Product { get; set; }

        /*      public ShoppingCartResponse ShoppingCart { get; set; }

              public ProductResponse Product { get; set; }*/
    }
}
