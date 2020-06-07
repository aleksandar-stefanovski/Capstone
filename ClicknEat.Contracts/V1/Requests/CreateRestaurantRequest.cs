using ClicknEat.Contracts.V1.Responses;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CreateRestaurantRequest
    {
        public string RestaurantName { get; set; }

        public string Description { get; set; }

        public CategoryToRestaurantRequest CategoryToRestaurantRequest { get; set; }

        /*public ICollection<ProductResponse> Products { get; set; }*/

        /*public ICollection<ProductCategory> ProductCategories { get; set; } */
    }
}
