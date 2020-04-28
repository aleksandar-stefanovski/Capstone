using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class RestaurantResponse
    {
        public Guid Id { get; set; }

        public string RestaurantName { get; set; }

        public string Description { get; set; }

        public Guid RestaurantCategoryId { get; set; }

        public List<ProductCategory> ProductCategories { get; set; }

        public List<Product> Products { get; set; }
    }
}
