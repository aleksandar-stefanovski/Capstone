using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class RestaurantProductResponse
    {
        public Guid Id { get; set; }

        public string RestaurantName { get; set; }

        public string Description { get; set; }

        public ICollection<ProductCategoryListResponse> ProductCategories { get; set; }

        public RestaurantProductResponse()
        {
            ProductCategories = new Collection<ProductCategoryListResponse>();
        }
    }
}
