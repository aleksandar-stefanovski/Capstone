using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Services
{
    public interface IUriService
    {
        Uri GetPostUri(string restaurantId);
    }
}
