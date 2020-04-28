using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CreateRestaurantRequest
    {
        public string RestaurantName { get; set; }

        public string Description { get; set; }

        public IEnumerable<ProductCategory> ProductCategories { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
}
