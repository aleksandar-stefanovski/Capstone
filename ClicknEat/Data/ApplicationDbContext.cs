using System;
using System.Collections.Generic;
using System.Text;
using ClicknEat.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ClicknEat.Data
{
    public class DataContext : IdentityDbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        DbSet<Restaurant> Restaurants { get; set; }
        DbSet<RestaurantCategory> RestaurantCategories { get; set; }
        DbSet<Product> Products { get; set; }
        DbSet<ProductCategory> ProductCategories { get; set; }
        DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<OrderDetail> OrderDetails { get; set; }
    }
}
