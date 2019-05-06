using System;
using FMG_serv.Utils;
using Microsoft.AspNetCore.Mvc;

namespace FMG_serv.controllers
{
    public class WraithController
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