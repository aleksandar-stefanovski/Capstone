using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClicknEat.Contracts.V1;
using ClicknEat.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClicknEat.Controllers.V1
{
    [ApiController]
    public class RestaurantsController : ControllerBase
    {
            

        [HttpGet(ApiRoutes.Restaurants.GetAll)]
        public IActionResult GetAll()
        {
            return Ok();
        }
    }

}