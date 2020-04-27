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

        public Guid RestaurantId { get; set; }

        [Required]
        [StringLength(80, MinimumLength = 2)]
        public string RestaurantName { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string Description { get; set; }

        [ForeignKey(nameof(RestaurantId))]
        public RestaurantCategory RestaurantCategory { get; set; }

        public List<ProductCategory> ProductCategories { get; set; }

        public List<Product> Products { get; set; }
    }
}
