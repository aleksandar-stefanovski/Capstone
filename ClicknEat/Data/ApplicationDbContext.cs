using System;
using System.Collections.Generic;
using System.Data.Entity;
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

       public Microsoft.EntityFrameworkCore.DbSet<Restaurant> Restaurants { get; set; }
       public Microsoft.EntityFrameworkCore.DbSet<RestaurantCategory> RestaurantCategories { get; set; }
       public Microsoft.EntityFrameworkCore.DbSet<Product> Products { get; set; }
       public Microsoft.EntityFrameworkCore.DbSet<ProductCategory> ProductCategories { get; set; }
       public Microsoft.EntityFrameworkCore.DbSet<ShoppingCartItem> ShoppingCartItems { get; set; }
       public Microsoft.EntityFrameworkCore.DbSet<Order> Orders { get; set; }
       public Microsoft.EntityFrameworkCore.DbSet<OrderDetail> OrderDetails { get; set; }

        protected void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .HasOptional(r => r.Restaurant)
                .WithMany()
                .WillCascadeOnDelete(true);
        }
    }
}
