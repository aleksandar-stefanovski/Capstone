using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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

        public string RestaurantImagePath { get; set; }

        public RestaurantCategory RestaurantCategory { get; set; }

        public ICollection<ProductCategory> ProductCategories { get; set; }

        public ICollection<Product> Products { get; set; }

        public Restaurant()
        {
            ProductCategories = new Collection<ProductCategory>();
            Products = new Collection<Product>();
        }
    }
}
