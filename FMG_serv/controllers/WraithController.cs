using System;
using FMG_serv.Utils;

namespace FMG_serv.controllers
{
    public class WraithController
    {
        public void RunHello()
        {
            var output = ShellHelper.Bash("wraith capture test-serv/public/hello_css_test/configs/capture.yaml");
            Console.WriteLine(output);
        }

    }
}