using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Domain
{
    
    public class ShoppingCartItem
    {
     [Key]
     public Guid Id { get; set; }

     public Guid ShoppingCartId { get; set; }

     [Required]
     public int Quantity { get; set; }

     [ForeignKey(nameof(ShoppingCartId))]
     public ShoppingCart ShoppingCart { get; set; }

     public Product Product { get; set; }
    }
}
