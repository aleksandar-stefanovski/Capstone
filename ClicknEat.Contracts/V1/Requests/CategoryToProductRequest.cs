using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Contracts.V1.Requests
{
    public class CategoryToProductRequest
    {
        public Guid Id { get; set; }
        public string ProductCategoryName { get; set; }
    }
}
