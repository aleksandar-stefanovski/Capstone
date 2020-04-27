using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Installers
{
    public class CorsInstaller : IInstaller
    {
        public void InstallServices(IServiceCollection services, IConfiguration Configuration)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("ClicknEatOrigin",
                builder => builder.WithOrigins("http://localhost:4200"));
            });
        }
    }
}
