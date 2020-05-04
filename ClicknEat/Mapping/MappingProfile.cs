using AutoMapper;
using ClicknEat.Contracts.V1.Responses;
using ClicknEat.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClicknEat.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Restaurant, RestaurantResponse>();
            CreateMap<Restaurant, RestaurantProductResponse>();

            CreateMap<RestaurantCategory, RestaurantCategoryResponse>();
            CreateMap<RestaurantCategory, RestaurantCategoryListResponse>();
            CreateMap<Product, ProductResponse>();
        }
    }
}
