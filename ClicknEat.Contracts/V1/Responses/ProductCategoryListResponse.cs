using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class ProductCategoryListResponse
    {
        public Guid Id { get; set; }

        public Guid RestaurantId { get; set; }

        public string ProductCategoryName { get; set; }

        public ICollection<ProductResponse> Products { get; set; }

        public ProductCategoryListResponse()
        {
            Products = new Collection<ProductResponse>();
        }
    }
}
