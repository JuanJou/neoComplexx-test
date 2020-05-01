
using System;
using System.Collections.Generic;
using backend.models;

namespace backend.Repository
{

    public class ArrayClientsRepository : ClientsRepository
    {
        private List<Client> listOfClients;
        private int lastId;
        public ArrayClientsRepository()
        {
            this.listOfClients = new List<Client>();
            this.lastId = 0;
        }

        public Client addNewClient(Client newClient)
        {
            newClient.id = lastId;
            this.listOfClients.Add(newClient);
            lastId++;
            return newClient;
        }

        public ICollection<Client> getAllClients()
        {
            return this.listOfClients;
        }

        public Client getClientById(int id)
        {
            Client searchedClient = this.listOfClients.Find(client => client.id == id);
            return searchedClient;
        }

        public void removeClient(int id)
        {
            this.listOfClients.RemoveAt(id);
        }

        public Client updateClient(Client oldClient)
        {
            this.listOfClients.ForEach(client =>
            {
                if (client.id == oldClient.id)
                {
                    client.firstName = oldClient.firstName;
                    client.lastName = oldClient.lastName;
                    client.address = oldClient.address;
                }
            });
            return null;
        }
    }
}