using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ngcommerce.Startup))]
namespace ngcommerce
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ngcommerce.Web.Startup.Register(app);
        }
    }
}
