using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Domain
{
    public class ShoppingCart
    {
        [Key]
        public Guid Id { get; set; }

        public List<ShoppingCartItem> ShoppingCartItems { get; set; }
    }
}
