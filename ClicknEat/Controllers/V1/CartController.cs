/*using System;
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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace ClicknEat.Controllers.V1
{
    [Route(ApiRoutes.Cart.Route)]
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private readonly IShoppingCartService _shoppingCartService;
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;
        private readonly ShoppingCart _shoppingCart;

        public ShoppingCartController(IShoppingCartService shoppingCartService, IMapper mapper, ApplicationDbContext context, ShoppingCart shoppingCart)
        {
            _shoppingCartService = shoppingCartService;
            _mapper = mapper;
            _context = context;
            _shoppingCart = shoppingCart;
        }




        [HttpPost(ApiRoutes.Cart.AddToCart)]
        public async Task<IActionResult> AddToCart(Guid productId)
        {
            var selectedProduct = _context.Products.FirstOrDefault(x => x.Id == productId);

            if (selectedProduct != null)
            {
                await _shoppingCartService.AddToCartAsync(selectedProduct, 1);
            }

            return Ok(new Response<ShoppingCartItemResponse>(_mapper.Map<ShoppingCartItemResponse>(selectedProduct)));
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User, Admin")]
        [HttpPost(ApiRoutes.Cart.Create)]
        public async Task<IActionResult> Create(CreateShoppingCartRequest shoppingCartRequest)
        {
            var cart = new ShoppingCart
            {
                Id = shoppingCartRequest.Id,
                UserId = shoppingCartRequest.UserId
            };

            if (string.IsNullOrEmpty(cart.Id.ToString()))
                shoppingCartRequest.Id = Guid.NewGuid();

            await _shoppingCartService.CreateCartAsync(cart);

            var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            var lacationUrl = baseUrl + "/" + ApiRoutes.Cart.Get.Replace("{cartId}", shoppingCartRequest.Id.ToString());

            var response = new ShoppingCartResponse { Id = cart.Id.ToString() };
            return Created(lacationUrl, response);
        }
    }
}*/