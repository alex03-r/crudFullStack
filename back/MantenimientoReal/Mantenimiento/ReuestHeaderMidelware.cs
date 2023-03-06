using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Threading.Tasks;

namespace Mantenimiento
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class ReuestHeaderMidelware
    {
        private readonly RequestDelegate _next;

        public ReuestHeaderMidelware(RequestDelegate next)
        {
            _next = next;
        }

        public async  Task Invoke(HttpContext httpContext)
        {

            //  httpContext.
          var token =   httpContext.Request.Headers["Authorization"].ToString();

           if (!token.Contains("1234"))
            {


               httpContext.Response.StatusCode = StatusCodes.Status401Unauthorized;
                await httpContext.Response.WriteAsync("Missing or invalid token");
                return;

            }

             await _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class ReuestHeaderMidelwareExtensions
    {
        public static IApplicationBuilder UseReuestHeaderMidelware(this IApplicationBuilder builder)
        {
            
            return builder.UseMiddleware<ReuestHeaderMidelware>();
        }
    }
}
