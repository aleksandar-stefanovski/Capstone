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
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ClicknEat.Controllers.V1
{
    [Route(ApiRoutes.Cart.Route)]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class ShoppingCartController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ShoppingCart _shoppingCart;
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public ShoppingCartController(IMapper mapper, IProductService productService, ApplicationDbContext context, ShoppingCart shoppingCart)
        {
            _context = context;
            _shoppingCart = shoppingCart;
            _productService = productService;
            _mapper = mapper;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        [HttpGet(ApiRoutes.Cart.Get)]
        public async Task<IActionResult> Get()
        {
            var items = await _shoppingCart
                .GetShoppingCartItemsAsync();

            _shoppingCart.ShoppingCartItems = items;

            var sCVM = new ShoppingCartViewModel
            {
                Id = _shoppingCart.Id,
                ShoppingCartItems = _shoppingCart.ShoppingCartItems,
                ShoppingCartTotal = await _shoppingCart.GetShoppingCartTotalAsync()
            };

            return Ok(new Response<ShoppingCartViewModel>(_mapper.Map<ShoppingCartViewModel>(sCVM)));
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        [HttpPost(ApiRoutes.Cart.AddToCart)]
        public async Task<IActionResult> AddToShoppingCart(Guid productId)
        {
            var selectedProduct = await _productService.ProductByIdAsync(productId);

            if(selectedProduct != null)
            {
                await _shoppingCart
                    .AddToCartAsync(selectedProduct, 1);
            }

            var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            var locationUri = baseUrl + "/" + ApiRoutes.Cart.Get.Replace("{cartId}", _shoppingCart.Id.ToString());

            /* var locationUri = _uriService.GetCartUri(sCVM.ShoppingCart.Id.ToString()); */
            return Created(locationUri, selectedProduct);
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        [HttpDelete(ApiRoutes.Cart.RemoveFromCart)]
        public async Task<IActionResult> RemoveFromShoppingCart([FromQuery] Guid productId)
        {
            var selectedProduct = await _productService.ProductByIdAsync(productId);
                
            if (selectedProduct != null)
            {
                await _shoppingCart
                    .RemoveFromCartAsync(selectedProduct);
            }

            return NoContent();
        }

        /*[HttpDelete(ApiRoutes.Cart.ClearCart)]
        public async Task<IActionResult> ClearShoppingCart([FromQuery] Guid productId)
        {
            var selectedProducts = await _shoppingCart.GetShoppingCartItemsAsync();

            if (selectedProducts != null)
            {
                await _shoppingCart
                    .ClearCartAsync();
            }

            return NoContent();
        }*/

    }
}