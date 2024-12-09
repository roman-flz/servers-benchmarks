using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace WebApplication1.Controllers
{
    [Route("api/v1")]
    public class Class : ControllerBase
    {
        private readonly MyDBContext _context;
        public Class(MyDBContext context)
        {

            _context = context;
        }

        [HttpGet("/tasks")]
        public async Task<List<MyDBContext.task>> GetTasks()
        {
            return await _context.tasks.ToListAsync();

        }

        [HttpGet("tasks/{id}")]
        public async Task<MyDBContext.task> GetTask(Guid id)
        {
            return await _context.tasks.Where(x => x.id == id).FirstOrDefaultAsync();
        }

        [HttpPost("tasks")]
        public  IActionResult PostTask([FromBody] MyDBContext.postReq item)
        {
            try
            {
                MyDBContext.task task = new MyDBContext.task();

                var desc = item.description;
                task.description = item.description;
                task.title = item.title;
                task.createdat = DateTime.UtcNow;
                task.updatedat = DateTime.UtcNow;

                _context.Add(task);
                _context.SaveChanges();

                return Ok(task);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPut("tasks/{id}")]
        public async Task<IActionResult> PutTask(Guid id, [FromBody] MyDBContext.postReq item)
        {
            try
            {
                MyDBContext.task task = await _context.tasks.Where(x => x.id == id).FirstOrDefaultAsync();

                task.description = item.description;
                task.title = item.title;
                task.updatedat = DateTime.UtcNow;

                _context.Update(task);
                _context.SaveChanges();

                return Ok(task);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpDelete("tasks/{id}")]
        public async Task<IActionResult> DeleteTask(Guid id)
        {
            try
            {
                var task = await _context.tasks.Where(x => x.id == id).FirstOrDefaultAsync();
                _context.tasks.Remove(task);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }


        }


    }
}
