using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class MyDBContext : DbContext
    {

        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options) { }

        public DbSet<task> tasks { get; set; }

        public class task
        {
            public Guid id { get; set; }
            public string title { get; set; }

            public string description { get; set; }
            public DateTime createdat { get; set; }

            public DateTime updatedat { get; set; }
        }

        public class postReq
        {
            public string title { get; set; }
            public string description { get; set; }
        }
    }
}
