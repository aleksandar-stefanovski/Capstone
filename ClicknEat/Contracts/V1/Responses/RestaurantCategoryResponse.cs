using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class RestaurantCategoryResponse
    {
        public Guid Id { get; set; }

        public string RestaurantCategoryName { get; set; }
    }
}
