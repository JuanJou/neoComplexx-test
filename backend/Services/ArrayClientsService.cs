
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
        public void addNewClient(Client newClient)
        {
            if (newClient.isValid())
                this.repo.addNewClient(newClient);
        }

        public ICollection<Client> getAllClients()
        {
            return this.repo.getAllClients();
        }

        public Client getClientById(int id)
        {
            return this.repo.getClientById(id);
        }

        public void modifyClient(Client oldClient)
        {
            if (oldClient.isValid())
                this.repo.updateClient(oldClient);
        }

        public void removeClient(int id)
        {
            this.repo.removeClient(id);
        }
    }
}