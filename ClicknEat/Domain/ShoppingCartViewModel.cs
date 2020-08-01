using ClicknEat.Contracts.V1.Responses;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Domain
{
    public class ShoppingCartViewModel
    {
        public string Id { get; set; }

        public ICollection<ShoppingCartItem> ShoppingCartItems { get; set; }

        public decimal ShoppingCartTotal { get; set; }

        public ShoppingCartViewModel()
        {
            ShoppingCartItems = new Collection<ShoppingCartItem>();
        }

        /*public ShoppingCart ShoppingCart { get; set; }*/
    }
}
