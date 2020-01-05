using gamesStore.Models;
using Microsoft.EntityFrameworkCore;

namespace gamesStore.Controllers
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<VideoGame> VideoGames { get; set; }
    }
}
