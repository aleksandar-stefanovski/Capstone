using ClicknEat.Contracts.V1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public class UriService : IUriService
    {
        private readonly string _baseUri;

        public UriService(string baseUri)
        {
            _baseUri = baseUri;
        }

        public Uri GetRestaurantUri(string restaurantId)
        {
            return new Uri(_baseUri + ApiRoutes.Restaurants.Get.Replace("{restaurantId}", restaurantId));
        }

    }
}
