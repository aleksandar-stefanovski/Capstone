using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ClicknEat.Contracts.V1;
using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Data;
using ClicknEat.Domain;
using ClicknEat.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClicknEat.Controllers.V1
{
    [ApiController]
    public class RestaurantController : Controller
    {
        private readonly IRestaurantService _restaurantService;
        private readonly IMapper _mapper;
        /*private readonly IUriService _uriService;*/


        public RestaurantController(IRestaurantService restaurantService, IMapper mapper)
        {
            _restaurantService = restaurantService;
            _mapper = mapper;
            /*_uriService = uriService;*/
        }

        [HttpGet(ApiRoutes.Restaurants.GetAll)]
        public async Task<IActionResult> GetAll()
        {
            var restaurants = await _restaurantService.GetAllAsync();

            return Ok(_mapper.Map<List<Restaurant>, List<RestaurantResponse>>(restaurants));
        }

        [HttpGet(ApiRoutes.Restaurants.Get)]
        public async Task<IActionResult> GetRestaurant([FromRoute] Guid restaurantId)
        {
            var restaurant = await _restaurantService.GetRestaurantAsync(restaurantId);

            if(restaurant == null)
            {
                return NotFound();
            }

            return Ok(new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));
        }

        [HttpPost(ApiRoutes.Restaurants.Create)]
        public async Task<IActionResult> CreateRestaurant([FromBody] CreateRestaurantRequest createRestaurantRequest)
        {
            var newRestaurantId = new Guid();
            var restaurant = new Restaurant
            {
                Id = newRestaurantId,
                RestaurantName = createRestaurantRequest.RestaurantName,
                Description = createRestaurantRequest.Description
            };

            await _restaurantService.CreateRestaurantAsync(restaurant);

            /*var locationUri = _uriService.GetRestaurantUri(restaurant.Id.ToString());
            return Created(locationUri, new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*/

            return Ok(new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));
        }

        [HttpPut(ApiRoutes.Restaurants.Update)]
        public async Task<IActionResult> UpdateRestaurant([FromRoute] Guid restaurantId, [FromBody] UpdateRestaurantRequest updateRestaurantRequest)
        {
            var restaurant = await _restaurantService.GetRestaurantByIdAsync(restaurantId);
            restaurant.RestaurantName = updateRestaurantRequest.RestaurantName;
            restaurant.Description = updateRestaurantRequest.Description;

            var updated = await _restaurantService.UpdateRestaurantAsync(restaurant);

            if (updated)
                return Ok(new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));

                return NotFound();
        }

        [HttpDelete(ApiRoutes.Restaurants.Delete)]
        public async Task<IActionResult> DeteleRestaurant([FromRoute] Guid restaurantId)
        {
            var deleted = await _restaurantService.DeleteRestaurantAsync(restaurantId);

            if (deleted)
                return NoContent();

            return NotFound();
        }
    }
}