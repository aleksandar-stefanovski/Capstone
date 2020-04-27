using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Domain
{
    public class Product
    {
        [Key]
        public Guid Id { get; set; }

        public Guid ProductCategoryId { get; set; }

        public Guid RestaurantId { get; set; }

        [Required]
        [StringLength(80, MinimumLength = 2)]
        public string ProductName { get; set; }

        [Required]
        [DataType(DataType.Text)]
        public string Description { get; set; }

        [Required]
        public int Price { get; set; }

        public string ImagePath { get; set; }

        [ForeignKey(nameof(ProductCategoryId))]
        public ProductCategory Category { get; set; }

        [ForeignKey(nameof(RestaurantId))]
        public Restaurant Restaurant { get; set; }

        public List<OrderDetail> OrderDetails { get; set; }

    }
}
