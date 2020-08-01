using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;

namespace ClicknEat.Contracts.V1.Responses
{
    public class OrderResponse
    {
        public Guid Id { get; set; }

        public string UserId { get; set; }

        public string FullName { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public int OrderTotal { get; set; }

        public DateTime OrderPlaced { get; set; }

        public ICollection<OrderDetailResponse> OrderDetails { get; set; }

        public OrderResponse()
        {
            OrderDetails = new Collection<OrderDetailResponse>();
        }
    }
}
