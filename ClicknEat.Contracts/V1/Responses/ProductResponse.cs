using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class ProductResponse
    {
        public Guid Id { get; set; }

        public Guid RestaurantId { get; set; }

        public string ProductName { get; set; }

        public string Description { get; set; }

        public int Price { get; set; }

        public string ImagePath { get; set; }

        public ProductCategoryResponse ProductCategory { get; set; }

    }
}
