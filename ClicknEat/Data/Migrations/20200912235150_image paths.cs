using Microsoft.EntityFrameworkCore.Migrations;

namespace ClicknEat.Data.Migrations
{
    public partial class imagepaths : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RestaurantImagePath",
                table: "Restaurants",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RestaurantImagePath",
                table: "Restaurants");
        }
    }
}
