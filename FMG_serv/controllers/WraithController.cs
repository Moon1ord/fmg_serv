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
        public IActionResult RunWraithTestAsync([FromForm] string path)
        {
            if(_chromeP.Length > 1 || _pahntomjsP.Length > 1)
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
                    ShellHelper.Bash(execCommand);
                    while(_chromeP.Length!=0 || _pahntomjsP.Length!=0){

                    }
                    return Json(new{status = "done"});
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return Json(e.Message);
                }         
            }         
        }

        public IActionResult GetTestProgress(){
            return Json(new{phantomThreads=_pahntomjsP.Length, chromeThreads=_chromeP.Length});
        }
    }
}