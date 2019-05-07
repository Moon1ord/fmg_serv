using System;
using FMG_serv.Utils;
using Microsoft.AspNetCore.Mvc;

namespace FMG_serv.controllers
{
    //[NoCache]
    public class WraithController : Controller
    {
        public void RunWraithTestAsync([FromForm] string path)
        {
            Console.WriteLine("The test path is "+ path);
            string execComand = ("cd " + path + "; pwd; wraith capture configs/capture.yaml"); 
            Console.WriteLine(execComand);
            ShellHelper.Bash(execComand);
            
        }
    }
}