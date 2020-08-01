using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ClicknEat.Contracts.V1;
using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Domain;
using ClicknEat.Extensions;
using ClicknEat.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClicknEat.Controllers.V1
{
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class RestaurantCategoryController : Controller
    {
        private readonly IRestaurantCategoryService _restaurantCategoryService;
        private readonly IMapper _mapper;
        /*private readonly IUriService _uriService;*/

        public RestaurantCategoryController(IRestaurantCategoryService restaurantCategoryService, IMapper mapper)
        {
            _restaurantCategoryService = restaurantCategoryService;
            _mapper = mapper;
            /*_uriService = uriService;*/
        }

        [HttpGet(ApiRoutes.RestaurantsCategories.GetAll)]
        public async Task<IActionResult> GetAll()
        {
            var restaurantCategory = await _restaurantCategoryService
                .GetAllAsync();

            return Ok(_mapper.Map<List<RestaurantCategory>, List<RestaurantCategoryResponse>>(restaurantCategory));
        }

        [HttpGet(ApiRoutes.RestaurantsCategories.Get)]
        public async Task<IActionResult> GetRestaurantCategory([FromRoute] Guid restaurantCategoryId)
        {
            var restaurantCategory = await _restaurantCategoryService
                .GetRestaurantCategoryAsync(restaurantCategoryId);

            if (restaurantCategory.Id != null && restaurantCategory.Id != Guid.Empty && restaurantCategory.Id == restaurantCategoryId)
                return Ok(new Response<RestaurantCategoryListResponse>(_mapper.Map<RestaurantCategoryListResponse>(restaurantCategory)));


            return NotFound();

       /*     foreach (var item in restaurantCategory)
            {
                if (item.Id != null && item.Id != Guid.Empty && item.Id == restaurantCategoryId)
                {
                    return Ok(_mapper.Map<List<RestaurantCategory>, List<RestaurantCategoryListResponse>>(restaurantCategory));
                }
            }

            *//*return Ok(new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*//*
            return NotFound();*/
        }

        /*[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]*/
        [HttpPost(ApiRoutes.RestaurantsCategories.Create)]
        public async Task<IActionResult> CreateRestaurantCategory([FromBody] CreateRestaurantCategoryRequest createRestaurantCategoryRequest)
        {
            var newRestaurantCategoryId = new Guid();
            var restaurantCategory = new RestaurantCategory
            {
                Id = newRestaurantCategoryId,
                RestaurantCategoryName = createRestaurantCategoryRequest.RestaurantCategoryName
            };

            await _restaurantCategoryService
                .CreateRestaurantCategoryAsync(restaurantCategory);

            /*var locationUri = _uriService.GetRestaurantUri(restaurant.Id.ToString());
            return Created(locationUri, new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*/

            return Ok(new Response<RestaurantCategoryResponse>(_mapper.Map<RestaurantCategoryResponse>(restaurantCategory)));
        }

        /*[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]*/
        [HttpPut(ApiRoutes.RestaurantsCategories.Update)]
        public async Task<IActionResult> UpdateRestaurantCategory([FromRoute] Guid restaurantCategoryId, [FromBody] UpdateRestaurantCategoryRequest updateRestaurantCategoryRequest)
        {
            var restaurantCategory = await _restaurantCategoryService
                .GetRestaurantCategoryByIdAsync(restaurantCategoryId);

            if(restaurantCategory == null)
                return BadRequest();

            restaurantCategory.RestaurantCategoryName = updateRestaurantCategoryRequest
                .RestaurantCategoryName;

            var updated = await _restaurantCategoryService
                .UpdateRestaurantCategoryAsync(restaurantCategory);

            if (updated)
                return Ok(new Response<RestaurantCategoryResponse>(_mapper.Map<RestaurantCategoryResponse>(restaurantCategory)));

            return NotFound();
        }

       /* [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]*/
        [HttpDelete(ApiRoutes.RestaurantsCategories.Delete)]
        public async Task<IActionResult> DeteleRestaurantCategory([FromRoute] Guid restaurantCategoryId)
        {
            var deleted = await _restaurantCategoryService
                .DeleteRestaurantCategoryAsync(restaurantCategoryId);

            if (deleted)
                return NoContent();

            return NotFound();
        }
    }
}