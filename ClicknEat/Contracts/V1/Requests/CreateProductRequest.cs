using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CreateProductRequest
    {
        public string ProductName { get; set; }

        public string Description { get; set; }

        public int Price { get; set; }

        public Guid? RestaurantId = Guid.Empty;

      /*public string ImagePath { get; set; }*/

      /*public ProductCategory ProductCategory { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }*/
    }
}
