using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Requests
{
    public class UpdateRestaurantRequest
    {
        public string RestaurantName { get; set; }

        public string Description { get; set; }

        public string RestaurantImagePath { get; set; }

        public CategoryToRestaurantRequest CategoryToRestaurantRequest { get; set; }
    }
}
