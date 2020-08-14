
using AutoMapper;
using ClicknEat.Contracts.V1;
using ClicknEat.Contracts.V1.Requests;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Data;
using ClicknEat.Domain;
using ClicknEat.Extensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ClicknEat.Controllers.V1
{
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class OrdersController : Controller
    {
        private readonly IOrderService _orderService;
        private readonly IMapper _mapper;
        private readonly ShoppingCart _shoppingCart;
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        /*private readonly IUriService _uriService;*/

        public OrdersController(IOrderService orderService, IMapper mapper, ApplicationDbContext context, ShoppingCart shoppingCart, UserManager<IdentityUser> userManager)
        {
            _orderService = orderService;
            _mapper = mapper;
            _context = context;
            _shoppingCart = shoppingCart;
            _userManager = userManager;
            /*_uriService = uriService;*/
        }

        [HttpGet(ApiRoutes.Order.GetAll)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public async Task<IActionResult> GetAllOrders()
        {
            var getOrders = await _orderService
                .GetOrdersAsync();

            if (!User.Identity.IsAuthenticated)
                return Unauthorized();

            return Ok(_mapper.Map<List<Order>, List<OrderResponse>>(getOrders));
        }

        [HttpGet(ApiRoutes.Profile.GetMine)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        public async Task<IActionResult> GetMyOrders()
        {
            var userId = HttpContext.GetUserId();
            var findById = await _userManager.FindByIdAsync(userId);

            var getOrders = await _orderService
                .GetMyOrdersAsync(userId);

            if (getOrders.Equals(null))
                return NotFound();

            if (findById.Id != userId)
                return Unauthorized();

            return Ok(_mapper.Map<List<Order>, List<OrderResponse>>(getOrders));
        }

        [HttpPost(ApiRoutes.Order.Create)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderRequest createOrderRequest)
        {

            var userId = HttpContext.GetUserId();

            var findById = await _userManager
                .FindByIdAsync(userId);

            var userOwnsOrder = await _orderService
                .UserOwnsOrdersAsync(userId);

            if (userOwnsOrder.Equals(null))
                return NotFound();

            if (findById.Id != userId)
                return Unauthorized();

            var order = new Order()
            {
                Id = new Guid(),
                OrderPlaced = DateTime.Now,
                UserId = HttpContext.GetUserId(),
                FullName = createOrderRequest.FullName,
                Address = createOrderRequest.Address,
                PhoneNumber = createOrderRequest.PhoneNumber,
                Email = createOrderRequest.Email,
                OrderTotal = await _shoppingCart.GetShoppingCartTotalAsync(),
            };

            await _orderService.CreateOrder(order);

            var baseUrl = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host.ToUriComponent()}";
            var locationUri = baseUrl + ApiRoutes.Order.Get. Replace("{orderId}", order.Id.ToString());

            /*var locationUri = _uriService.GetCartUri(sCVM.ShoppingCart.Id.ToString());*/
            return Created(locationUri, new Response<OrderResponse>(_mapper.Map<OrderResponse>(order)));
        }

        [HttpDelete(ApiRoutes.Order.Remove)]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public async Task<IActionResult> RemoveOrder([FromRoute] Guid orderId)
        {
            var userId = HttpContext.GetUserId();
            var findById = await _userManager.FindByIdAsync(userId);

            var deleted = await _orderService
              .RemoveOrderAsync(orderId);

            if (findById.Id != userId)
                return Unauthorized();

            if (deleted)
                return NoContent();

            return BadRequest();
        }
    }
}
