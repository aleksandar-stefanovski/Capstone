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
    public class RestaurantCategory
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        [StringLength(60)]
        public string RestaurantCategoryName { get; set; }

        public ICollection<Restaurant> Restaurants { get; set; }

        public RestaurantCategory()
        {
            Restaurants = new Collection<Restaurant>();
        }
    }
}