using ClicknEat.Contracts.V1;
using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Domain;
using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace ClicknEat.IntegrationTests
{
    public class RestaurantsControllerTests : IntegrationTest
    {
        [Fact]
        public async Task GetAll_WithAnyRestaurantCategory_ReturnsListResponse()
        {
            // Arrange
            await AuthenticateAsync();
            // Act 
            var response = await TestClient.GetAsync(ApiRoutes.RestaurantsCategories.GetAll);

            // Assert 
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            (await response.Content.ReadAsAsync<List<RestaurantCategory>>()).Should().BeNullOrEmpty();
        }

        [Fact]
        public async Task Get_ReturnsRestaurantCategory_WhenRestaurantCategoryExistsInDatabase()
        {
            // Arrange
            var createdRestaurantCategory = await CreateRestaurantCategoryAsync(new CreateRestaurantCategoryRequest
            {
                RestaurantCategoryName = "IntegrationTest"
            });

            // Act
            var response = await TestClient.GetAsync(ApiRoutes.RestaurantsCategories.Get.Replace("{restaurantCategoryId}", createdRestaurantCategory.Id.ToString()));

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);
            var returnedRestaurantCategory = await response.Content.ReadAsAsync<Response<RestaurantCategoryResponse>>();
            returnedRestaurantCategory.Data.Id.Should().Be(createdRestaurantCategory.Id);
            returnedRestaurantCategory.Data.RestaurantCategoryName.Should().Be("IntegrationTest");
        }
    }
}