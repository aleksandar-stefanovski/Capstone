using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Responses
{
    public class ProductCategoryResponse
    {
        public Guid Id { get; set; }

        public string ProductCategoryName { get; set; }
    }
}
