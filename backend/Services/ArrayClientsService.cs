using System;
using System.Collections.Generic;
using backend.models;
using backend.Repository;

namespace backend.Services
{
    public class ArrayClientsService : ClientsService
    {
        ClientsRepository repo;
        public ArrayClientsService(ClientsRepository repo)
        {
            this.repo = repo;
        }
        public Client addNewClient(Client newClient)
        {
            return this.repo.addNewClient(newClient);
        }

        public ICollection<Client> getAllClients()
        {
            return this.repo.getAllClients();
        }

        public Client getClientById(int id)
        {
            Console.WriteLine("ID SERVICE: " + id);
            return this.repo.getClientById(id);
        }

        public Client modifyClient(Client oldClient)
        {
            return this.repo.updateClient(oldClient);
        }

        public void removeClient(int id)
        {
            this.repo.removeClient(id);
        }
    }
}