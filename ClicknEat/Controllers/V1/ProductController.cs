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
using ClicknEat.Extensions;
using ClicknEat.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClicknEat.Controllers.V1
{
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;
        /*private readonly IUriService _uriService;*/

        public ProductController(IProductService productService, IMapper mapper, ApplicationDbContext context)
        {
            _productService = productService;
            _mapper = mapper;
            _context = context;
            /*_uriService = uriService;*/
        }

        [HttpGet(ApiRoutes.Products.GetAll)]
        public async Task<IActionResult> GetAll([FromRoute] Guid restaurantId)
        {
            var products = await _productService
                .GetAllAsync(restaurantId);

            foreach (var item in products)
            {
                if (item.RestaurantId != null && item.RestaurantId == restaurantId)
                    return Ok(_mapper.Map<List<Product>, List<ProductResponse>>(products));
            }

            return NotFound();
        }

        [HttpGet(ApiRoutes.Products.Get)]
        public async Task<IActionResult> GetProduct([FromRoute] Guid restaurantId, [FromRoute] Guid productId)
        {
            var product = await _productService.GetProductAsync(restaurantId, productId);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(new Response<ProductResponse>(_mapper.Map<ProductResponse>(product)));
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpPost(ApiRoutes.Products.Create)]
        public async Task<IActionResult> CreateProduct([FromRoute] Guid restaurantId, [FromBody] CreateProductRequest createProductRequest)
        {
           /*var loadRestaurantId = await _context.Restaurants
                .Where(x => x.Id == restaurantId)
                .FirstOrDefaultAsync();

            if (loadRestaurantId == null)
                return BadRequest();*/

            var newProductId = new Guid();

            var query = await _context.ProductCategories
                .Where(x => x.Id == createProductRequest
                .CategoryToProductRequest.Id)
                .FirstOrDefaultAsync();

            if (query == null)
                return BadRequest();

            var product = new Product
            {
                Id = newProductId,
                ProductName = createProductRequest.ProductName,
                Description = createProductRequest.Description,
                Price = createProductRequest.Price,
                RestaurantId = restaurantId,
                ProductCategory = query
            };

            await _productService.CreateProductAsync(product);

            return Ok(new Response<ProductResponse>(_mapper.Map<ProductResponse>(product)));
            /*var locationUri = _uriService.GetRestaurantUri(restaurant.Id.ToString());
            return Created(locationUri, new Response<RestaurantResponse>(_mapper.Map<RestaurantResponse>(restaurant)));*/
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpPut(ApiRoutes.Products.Update)]
        public async Task<IActionResult> UpdateRestaurant([FromRoute] Guid restaurantId, [FromRoute] Guid productId, [FromBody] UpdateProductRequest updateProductRequest)
        {
            var product = await _productService
                .GetProductByIdAsync(restaurantId, productId);

            /*var query = await _context.RestaurantCategories
                .Where(x => x.Id == updateProductRequest
                .CategoryToRestaurantRequest.Id)
                .FirstOrDefaultAsync();*/

            if (product == null)
                return BadRequest();

            product.ProductName = updateProductRequest.ProductName;
            product.Description = updateProductRequest.Description;
            product.Price = updateProductRequest.Price;

            var updated = await _productService
                .UpdateProductAsync(product);

            if (updated)
                return Ok(new Response<ProductResponse>(_mapper.Map<ProductResponse>(product)));

            return BadRequest();
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpDelete(ApiRoutes.Products.Delete)]
        public async Task<IActionResult> DeteleRestaurant([FromRoute] Guid restaurantId, [FromRoute] Guid productId)
        {
            var deleted = await _productService.DeleteProductAsync(restaurantId, productId);

            if (deleted)
                return NoContent();

            return NotFound();
        }
    }
}