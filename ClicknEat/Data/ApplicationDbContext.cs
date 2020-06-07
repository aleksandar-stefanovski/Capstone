using System;
using System.Collections.Generic;
using System.Text;
using ClicknEat.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ClicknEat.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

       public DbSet<Restaurant> Restaurants { get; set; }
       public DbSet<RestaurantCategory> RestaurantCategories { get; set; }
       public DbSet<Product> Products { get; set; }
       public DbSet<ProductCategory> ProductCategories { get; set; }
       public DbSet<RefreshToken> RefreshTokens { get; set; }
       public DbSet<Order> Orders { get; set; }
       public DbSet<OrderDetail> OrderDetails { get; set; }
       public DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }
    }
}
