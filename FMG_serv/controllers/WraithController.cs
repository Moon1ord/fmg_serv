using System;
using FMG_serv.Utils;
using Microsoft.AspNetCore.Mvc;

namespace FMG_serv.controllers
{
    //[NoCache]
    public class WraithController : Controller
    {
        public async void RunWraithTestAsync([FromForm] string path)
        {
            try
            {
                Console.WriteLine("The test path is "+ path);
                var execCommand = ("cd " + path + "; pwd; wraith capture configs/capture.yaml"); 
                Console.WriteLine(execCommand + "\n");
                await ShellHelper.BashAsync(execCommand);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }            
        }
    }
}