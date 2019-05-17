using System.Diagnostics;
using System;
using System.Threading.Tasks;
using FMG_serv.Utils;
using Microsoft.AspNetCore.Mvc;

namespace FMG_serv.controllers
{
    public class WraithController : Controller
    {        
        private  Process [] _pahntomjsP = Process.GetProcessesByName("phantomjs");
        private Process [] _chromeP = Process.GetProcessesByName("chrome");
        public async Task<IActionResult> RunWraithTestAsync([FromForm] string path)
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
                    await Task.Run(() => {
                        while(_chromeP.Length!=0 || _pahntomjsP.Length!=0){}
                    });
                    return Json(new{status = "done"});
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return Json(e.Message);
                }         
            }         
        }

        public async Task<IActionResult> GetTestProgress(){
            try{
                await Task.Run(() => {
                    while(Process.GetProcessesByName("phantomjs").Length != 0 ||
                     Process.GetProcessesByName("chrome").Length != 0){
                    }
                });
            Task.WaitAll();
            return Json(new{status="done"});
            } catch (Exception ex){
                return Json(new{error=ex.Message});
            }
        }

        public IActionResult GetTestProcesses(){
            return Json(new{phantomThreads=_pahntomjsP.Length, chromeThreads=_chromeP.Length});
        }
    }
}