using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CreateShoppingCartItemRequest
    {
        public Guid ProductId { get; set; }

        public int Qunatity { get; set; }

        public ProductRequest Product { get; set; }
    }
}
