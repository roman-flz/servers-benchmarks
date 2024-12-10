using Microsoft.EntityFrameworkCore;

namespace dotnet.Models
{
    public class AppDbContext: DbContext
    {
      public AppDbContext(DbContextOptions<AppDbContext> options): base(options) 
        { }
        public DbSet<TaskItem> Tasks { get; set; }
    }
}
