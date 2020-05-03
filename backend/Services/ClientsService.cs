using System.Collections.Generic;
using backend.models;

namespace backend.Services
{
    public interface ClientsService
    {
        ICollection<Client> getAllClients();
        Client getClientById(int id);
        Client addNewClient(Client newClient);
        void removeClient(int id);
        void modifyClient(Client oldClient);
    }
}