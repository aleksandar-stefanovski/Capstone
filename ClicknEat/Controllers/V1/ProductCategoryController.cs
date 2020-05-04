﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using ClicknEat.Contracts.V1;
using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Domain;
using ClicknEat.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClicknEat.Controllers.V1
{
    [ApiController]
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

            return Ok(_mapper.Map<List<ProductCategory>, List<ProductCategoryResponse>>(productCategories));
        }

        [HttpGet(ApiRoutes.ProductsCategories.Get)]
        public async Task<IActionResult> GetProductCategory([FromRoute] Guid restaurantId, [FromRoute] Guid productCategoryId)
        {
            var productCategories = await _productCategoryService
                .GetProductCategoryAsync(restaurantId, productCategoryId);

            foreach (var item in productCategories)
            {
                if (item.Id != null && item.Id != Guid.Empty && item.Id == productCategoryId)
                {
                    return Ok(_mapper.Map<List<ProductCategory>, List<ProductCategoryListResponse>>(productCategories));
                }
            }

            /*return Ok(new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*/
            return NotFound();
        }

        [HttpPost(ApiRoutes.ProductsCategories.Create)]
        public async Task<IActionResult> CreateProductCategory([FromBody] CreateProductCategoryRequest createProductCategoryRequest)
        {
            var newProductCategoryId = new Guid();
            var productCategory = new ProductCategory
            {
                Id = newProductCategoryId,
                ProductCategoryName = createProductCategoryRequest.ProductCategoryName
            };

            await _productCategoryService
                .CreateProductCategoryAsync(productCategory);

            /*var locationUri = _uriService.GetRestaurantUri(restaurant.Id.ToString());
            return Created(locationUri, new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*/

            return Ok(new Response<ProductCategoryResponse>(_mapper.Map<ProductCategoryResponse>(productCategory)));
        }

        [HttpPut(ApiRoutes.ProductsCategories.Update)]
        public async Task<IActionResult> UpdateProductCategory([FromRoute] Guid restaurantId, [FromRoute] Guid productCategoryId, [FromBody] UpdateProductCategoryRequest updateProductCategoryRequest)
        {
            var productCategory = await _productCategoryService
                .GetProductCategoryByIdAsync(restaurantId, productCategoryId);

            if (productCategory == null)
                return BadRequest();

            productCategory.ProductCategoryName = updateProductCategoryRequest.ProductCategoryName;

            var updated = await _productCategoryService
                .UpdateProductCategoryAsync(productCategory);

            if (updated)
                return Ok(new Response<ProductCategoryResponse>(_mapper.Map<ProductCategoryResponse>(productCategory)));

            return NotFound();
        }

        [HttpDelete(ApiRoutes.ProductsCategories.Delete)]
        public async Task<IActionResult> DeteleProductCategory([FromRoute] Guid restaurantId, [FromRoute] Guid productCategoryId)
        {
            var deleted = await _productCategoryService
                .DeleteProductCategoryAsync(restaurantId, productCategoryId);

            if (deleted)
                return NoContent();

            return NotFound();
        }
    }
}