using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Requests
{
    public class UpdateProductRequest
    {
        public string ProductName { get; set; }

        public string Description { get; set; }

        public string ImagePath { get; set; }

        public int Price { get; set; }

        public CategoryToProductRequest CategoryToProductRequest { get; set; }

        /*public string ImagePath { get; set; }*/

        /*   public ProductCategory ProductCategory { get; set; }

           public Restaurant Restaurant { get; set; }

           public ICollection<OrderDetail> OrderDetails { get; set; }*/
    }
}
