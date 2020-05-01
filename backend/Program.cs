using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Nancy.Hosting.Self;

namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateHostBuilder(args).Build().Run();
            using (var host = new NancyHost(new Uri("http://localhost:5001")))
            {
                host.Start();
                Console.WriteLine("Running on http://localhost:5001");
                Console.ReadLine();
            }
        }
    }
}
