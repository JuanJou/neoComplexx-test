using System.Collections.Generic;
using backend.models;

namespace backend.Repository
{
    public interface ClientsRepository
    {
        Client getClientById(int id);
        ICollection<Client> getAllClients();
        void removeClient(int id);
        Client addNewClient(Client newClient);
        Client updateClient(Client client);

    }
}