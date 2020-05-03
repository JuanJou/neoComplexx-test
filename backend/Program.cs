using System;
using Nancy.Hosting.Self;

namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (var host = new NancyHost(new Uri("http://localhost:5001")))
            {
                host.Start();
                Console.WriteLine("Running on http://localhost:5001");
                Console.ReadLine();
            }
        }
    }
}
