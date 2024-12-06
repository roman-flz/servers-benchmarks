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

        [HttpPost("tasks/{item}")]
        public  IActionResult PostTask(string item)
        {
            try
            {
                MyDBContext.task task = new MyDBContext.task();

                dynamic obj = JsonConvert.DeserializeObject(item);

                var desc = obj.description;
                task.description = obj.description;
                task.title = obj.title;

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
        public async Task<IActionResult> PutTask(Guid id, [FromBody] string updates)
        {
            try
            {
                MyDBContext.task task = await _context.tasks.Where(x => x.id == id).FirstOrDefaultAsync();

                dynamic obj = JsonConvert.DeserializeObject(updates);

                var desc = obj.description;
                task.description = obj.description;
                task.title = obj.title;

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
