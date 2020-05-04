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

        public ICollection<ProductResponse> Products { get; set; }

        /*public ICollection<ProductCategory> ProductCategories { get; set; }*/

        public RestaurantProductResponse()
        {
            Products = new Collection<ProductResponse>();
        }
    }
}
