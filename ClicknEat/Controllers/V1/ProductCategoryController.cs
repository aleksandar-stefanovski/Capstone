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
    public class ProductCategoryController : ControllerBase
    {
        private readonly IProductCategoryService _productCategoryService;
        private readonly IMapper _mapper;
        /*private readonly IUriService _uriService;*/

        public ProductCategoryController(IProductCategoryService productCategoryService, IMapper mapper)
        {
            _productCategoryService = productCategoryService;
            _mapper = mapper;
            /*_uriService = uriService;*/
        }

        [HttpGet(ApiRoutes.ProductsCategories.GetAll)]
        public async Task<IActionResult> GetAll(Guid restaurantId)
        {
            var productCategories = await _productCategoryService
                .GetAllAsync(restaurantId);

            foreach(var item in productCategories)
            {
                if(item.RestaurantId != null && item.RestaurantId == restaurantId)
                    return Ok(_mapper.Map<List<ProductCategory>, List<ProductCategoryResponse>>(productCategories));
            }

            return NotFound();
        }

        [HttpGet(ApiRoutes.ProductsCategories.Get)]
        public async Task<IActionResult> GetProductCategory([FromRoute] Guid productCategoryId)
        {
            var productCategory = await _productCategoryService
                .GetProductCategoryAsync(productCategoryId);

            if (productCategory.Id != null && productCategory.Id != Guid.Empty && productCategory.Id == productCategoryId)
                return Ok(new Response<ProductCategoryListResponse>(_mapper.Map<ProductCategoryListResponse>(productCategory)));

            /*return Ok(new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*/
            return NotFound();
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpPost(ApiRoutes.ProductsCategories.Create)]
        public async Task<IActionResult> CreateProductCategory([FromRoute] Guid restaurantId, [FromBody] CreateProductCategoryRequest createProductCategoryRequest)
        {
            var newProductCategoryId = new Guid();

            var productCategory = new ProductCategory
            {
                Id = newProductCategoryId,
                ProductCategoryName = createProductCategoryRequest.ProductCategoryName,
                RestaurantId = restaurantId
            };

            await _productCategoryService
                .CreateProductCategoryAsync(productCategory);

            /*var locationUri = _uriService.GetRestaurantUri(restaurant.Id.ToString());
            return Created(locationUri, new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*/

            return Ok(new Response<ProductCategoryResponse>(_mapper.Map<ProductCategoryResponse>(productCategory)));
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpPut(ApiRoutes.ProductsCategories.Update)]
        public async Task<IActionResult> UpdateProductCategory([FromRoute] Guid productCategoryId, [FromBody] UpdateProductCategoryRequest updateProductCategoryRequest)
        {
            var productCategory = await _productCategoryService
                .GetProductCategoryByIdAsync(productCategoryId);

            if (productCategory == null)
                return BadRequest();

            productCategory.ProductCategoryName = updateProductCategoryRequest.ProductCategoryName;

            var updated = await _productCategoryService
                .UpdateProductCategoryAsync(productCategory);

            if (updated)
                return Ok(new Response<ProductCategoryResponse>(_mapper.Map<ProductCategoryResponse>(productCategory)));

            return NotFound();
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpDelete(ApiRoutes.ProductsCategories.Delete)]
        public async Task<IActionResult> DeteleProductCategory([FromRoute] Guid productCategoryId)
        {
            var deleted = await _productCategoryService
                .DeleteProductCategoryAsync(productCategoryId);

            if (deleted)
                return NoContent();

            return BadRequest();
        }
    }
}
