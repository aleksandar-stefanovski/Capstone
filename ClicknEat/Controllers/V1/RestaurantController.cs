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


    }

}