using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class ProductCategoryListResponse
    {
        public ICollection<ProductResponse> Products { get; set; }

        public ProductCategoryListResponse()
        {
            Products = new Collection<ProductResponse>();
        }
    }
}
