
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpGet(ApiRoutes.Order.GetAll)]
        public async Task<IActionResult> GetAllOrders()
        {
            var getOrders = await _orderService
                .GetOrdersAsync();

            if (!User.Identity.IsAuthenticated)
                return Unauthorized();

            return Ok(_mapper.Map<List<Order>, List<OrderResponse>>(getOrders));
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        [HttpGet(ApiRoutes.Profile.GetMine)]
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

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "User")]
        [HttpPost(ApiRoutes.Order.Create)]
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
            var locationUri = baseUrl + ApiRoutes.Order.Get.Replace("{orderId}", order.Id.ToString());

            /*var locationUri = _uriService.GetCartUri(sCVM.ShoppingCart.Id.ToString());*/
            return Created(locationUri, new Response<OrderResponse>(_mapper.Map<OrderResponse>(order)));
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin, User")]
        [HttpGet(ApiRoutes.Order.Get)]
        public async Task<IActionResult> GetOrder([FromRoute] Guid orderId)
        {
            var userId = HttpContext.GetUserId();
            var findById = await _userManager.FindByIdAsync(userId);

            var order = await _orderService
                .GetByIdAsync(orderId);

            if (findById.Id != userId)
                return Unauthorized();

            if (order.Id != null && order.Id != Guid.Empty && order.Id == orderId)
                return Ok(new Response<OrderResponse>(_mapper.Map<OrderResponse>(order)));

            return BadRequest();
        }
    

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpDelete(ApiRoutes.Order.Remove)]
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
