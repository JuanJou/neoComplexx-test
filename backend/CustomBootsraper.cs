using Nancy.Diagnostics;
using Nancy.Configuration;
using Nancy;
using Nancy.TinyIoc;
using backend.Services;
using backend.Repository;
using Nancy.Bootstrapper;
using System;
using System.Diagnostics;

public class CustomBootstrapper : DefaultNancyBootstrapper
{
    private Stopwatch watcher = new Stopwatch();
    public override void Configure(INancyEnvironment environment)
    {
        environment.Diagnostics(true, "password");
        base.Configure(environment);
    }

    protected override void ConfigureApplicationContainer(TinyIoCContainer container)
    {
        base.ConfigureApplicationContainer(container);
        container.Register<ClientsService, ArrayClientsService>().AsSingleton();
        container.Register<ClientsRepository, ArrayClientsRepository>().AsSingleton();
    }

    protected override void ApplicationStartup(TinyIoCContainer container, IPipelines pipelines)
    {
        pipelines.AfterRequest.AddItemToEndOfPipeline((ctx) =>
        {
            ctx.Response.WithHeader("Access-Control-Allow-Origin", "http://localhost:4200")
                            .WithHeader("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT")
                            .WithHeader("Access-Control-Allow-Headers", "Accept, Origin, Content-type");

        });

        pipelines.BeforeRequest += (conext) =>
        {
            watcher.Start();
            return null;
        };

        pipelines.AfterRequest += (context) =>
        {
            watcher.Stop();
            Console.WriteLine("Request: " + context.Request.Method + "API: " + context.Request.Path);
            Console.WriteLine("Time Elapsed: " + watcher.ElapsedMilliseconds + "ms");
        };
    }
}