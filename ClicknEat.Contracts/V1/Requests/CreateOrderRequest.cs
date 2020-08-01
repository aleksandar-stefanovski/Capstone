using System;
using System.Collections.Generic;
using System.Text;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CreateOrderRequest
    {
        public string FullName { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }
    }
}
