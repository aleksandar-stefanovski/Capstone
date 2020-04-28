using System;
using System.Collections.Generic;
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

        public IEnumerable<Restaurant> Restaurants { get; set; }
    }
}