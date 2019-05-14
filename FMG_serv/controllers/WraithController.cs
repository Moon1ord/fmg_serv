using System.Diagnostics;
using System;
using System.Threading.Tasks;
using FMG_serv.Utils;
using Microsoft.AspNetCore.Mvc;

namespace FMG_serv.controllers
{
    //[NoCache]
    public class WraithController : Controller
    {        
        private readonly Process [] _pahntomjsP = Process.GetProcessesByName("phantomjs");
        private readonly Process [] _chromeP = Process.GetProcessesByName("chrome");
        public async Task<IActionResult> RunWraithTestAsync([FromForm] string path)
        {
            if(Process.GetProcessesByName("chrome").Length > 1 || Process.GetProcessesByName("phantomjs").Length > 1)
            {
                Console.WriteLine("Test is running please wait!");
                return BadRequest();
            } 
            else 
            {
                try
                {
                    Console.WriteLine("The test path is "+ path);
                    var execCommand = ("cd " + path + "; pwd; wraith capture configs/capture.yaml"); 
                    Console.WriteLine(execCommand + "\n");
                    await ShellHelper.BashAsync(execCommand);
                    return Ok();
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return Json(e.Message);
                }         
            }         
        }

        public async Task<IActionResult> GetTestProgress(){
            return Json(new{phantomThreads=_pahntomjsP.Length, chromeThreads=_chromeP.Length});
        }
    }
}