using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Domain
{
    public class Restaurant
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(80, MinimumLength = 2)]
        public string RestaurantName { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string Description { get; set; }

        public RestaurantCategory RestaurantCategory { get; set; }

        public IEnumerable<ProductCategory> ProductCategories { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }
}
