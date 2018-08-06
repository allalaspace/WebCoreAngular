using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebCoreAngular.Models
{
    public class WebCoreAngularContext : DbContext
    {
        public WebCoreAngularContext (DbContextOptions<WebCoreAngularContext> options)
            : base(options)
        {
        }

        public DbSet<WebCoreAngular.Models.Workout> Workout { get; set; }
    }
}
