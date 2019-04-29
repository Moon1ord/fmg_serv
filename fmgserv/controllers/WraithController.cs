using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Renci.SshNet;

namespace fmgserv.controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WraithController : Controller
    {
        private SshClient sshClient = new SshClient("localhost", "root", "moonlord1488");
        
        [HttpGet]
        public async Task<IActionResult> GetTestPath()
        {
            Console.WriteLine("Hello from method");
            
            try
            {
                sshClient.Connect();
                var cmd = sshClient.RunCommand("ls");
                Console.WriteLine(cmd.Result);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            var process = new Process();
            return Ok();
        }
    }
}