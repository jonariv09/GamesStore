using System.Collections.Generic;
using System.Threading.Tasks;
using gamesStore.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace gamesStore.Controllers
{
    public class VideoGameController : Controller
    {
        private readonly ApplicationDbContext _context;

        public VideoGameController(ApplicationDbContext context)
        {
            _context = context;
        }


        [Route("api/ListGames")]
        public async Task<ActionResult<List<VideoGame>>> ListGames()
        {
            return await _context.VideoGames.ToListAsync();
        }

        [Route("api/CreateGame")]
        public async Task<IActionResult> CreateGame([FromBody] VideoGame game)
        {
            if (ModelState.IsValid)
            {
                _context.VideoGames.Add(game);
                int result = await _context.SaveChangesAsync();
                if (result == 0)
                    return NotFound();
                else
                    return Ok(game.Id);
            }

            return NotFound();
        }

        [Route("api/EditGame")]
        public async Task<IActionResult> EditGame([FromBody] VideoGame game)
        {
            _context.Entry(game).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(game.Id);
        }

        [Route("api/DeleteGame")]
        public async Task<IActionResult> Delete([FromBody] int? id)
        {
            if (id == null)
                return NotFound();

            var game = await _context.VideoGames.FindAsync(id);

            if (game == null)
                return NotFound();

            _context.Remove(game);
            int result = await _context.SaveChangesAsync();

            if (result == 0)
                return NotFound();
            else
                return Ok(game.Id);
        }
    }
}