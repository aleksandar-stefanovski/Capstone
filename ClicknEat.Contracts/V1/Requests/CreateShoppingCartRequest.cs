using System;
using System.Collections.Generic;
using System.Text;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CreateShoppingCartRequest
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }
    }
}
