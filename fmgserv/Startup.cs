using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


namespace fmgserv
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        
        public IConfiguration Configuration { get; }
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddCors();
            services.AddSpaStaticFiles(config => config.RootPath = "test-serv/build");
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin();
                builder.AllowAnyHeader();
                builder.AllowAnyMethod();
            });
            
            
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "test-serv";
                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript:"start");
                }
            });
            
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "wraith",
                    template: "{controller}/{action}/{id?}");
            });
        }
    }
}