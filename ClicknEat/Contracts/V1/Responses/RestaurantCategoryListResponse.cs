using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class RestaurantCategoryListResponse
    {
        public Guid Id { get; set; }

        public string RestaurantCategoryName { get; set; }

        public ICollection<RestaurantResponse> Restaurants { get; set; }

        public RestaurantCategoryListResponse()
        {
            Restaurants = new Collection<RestaurantResponse>();
        }
    }
}
