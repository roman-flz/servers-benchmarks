using dotnet.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TaskController(AppDbContext context)
        {
            _context = context;
        }

        // Get all Tasks endpoint
        [HttpGet("GetTasks")]
        public async Task<IActionResult> GetTasks()
        {
            var result = await _context.Tasks.Select(x => new
            {
                x.Id,
                x.Title,
                x.Description,
                x.CreatedAt,
                x.UpdatedAt
            }).ToListAsync();

            return Ok(result);
        }

        // Get Single Task endpoint
        [HttpGet("GetTask/{taskId}")]
        public async Task<IActionResult> GetTask(Guid taskId)
        {
            var task = await _context.Tasks.FindAsync(taskId);
            if (task == null) return NotFound();
            return Ok(task);
        }

        // Create Task endpoint
        [HttpPost("CreateTask")]
        public async Task<IActionResult> CreateTask([FromBody] TaskItem task)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            _context.Tasks.Add(task);

            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTask), new { taskId = task.Id }, task);
        }

        // Edit Task endpoint
        [HttpPut("EditTask/{taskId}")]
        public async Task<IActionResult> EditTask(Guid taskId, [FromBody] TaskItem task)
        {
            if (taskId != task.Id) return BadRequest("Task ID in the URL does not match the ID in the request body.");
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var existingTask = await _context.Tasks.FindAsync(taskId);
            if (existingTask == null) return NotFound();
            existingTask.Title = task.Title;
            existingTask.Description = task.Description;
            existingTask.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return Ok(existingTask);
        }

        // Delete Task endpoint
        [HttpDelete("DeleteTask/{taskId}")]
        public async Task<IActionResult> DeleteTask(Guid taskId)
        {
            var task = await _context.Tasks.FindAsync(taskId);
            if (task == null) return NotFound();
            _context.Tasks.Remove(task);

            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
