using System;
using backend.models;
using backend.Services;
using Nancy;
using Nancy.Extensions;
using Newtonsoft.Json;

public class ClientModule : NancyModule
{

    ClientsService clientService;

    public ClientModule(ClientsService clientService) : base("/client")
    {
        this.clientService = clientService;
        Get("", getAllClients);
        Post("", createClient);
        Get("/{id}", getClient);
        Delete("/{id}", deleteClient);
        Put("", updateClient);
    }

    private dynamic getAllClients(dynamic parameters)
    {
        return this.clientService.getAllClients();
    }
    private dynamic createClient(dynamic parameters)
    {
        Client newClient = extractClientFromBody();
        this.clientService.addNewClient(newClient);
        return this.clientService.getAllClients();
    }
    private dynamic getClient(dynamic parameters)
    {
        return this.clientService.getClientById(parameters.id);
    }
    private dynamic deleteClient(dynamic parameters)
    {
        this.clientService.removeClient(parameters.id);
        return this.clientService.getAllClients();
    }
    private dynamic updateClient(dynamic parameters)
    {
        Client client = extractClientFromBody();
        this.clientService.modifyClient(client);
        return this.clientService.getAllClients();
    }

    private Client extractClientFromBody()
    {
        return JsonConvert.DeserializeObject<Client>(Request.Body.AsString());
    }
}
