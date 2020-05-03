
namespace backend.models
{
    public class Client
    {
        public int? id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }
        public bool isValid()
        {
            return this.address != null && this.firstName != null && this.lastName != null;
        }

        public void updateProperties(Client otherClient)
        {
            this.firstName = otherClient.firstName;
            this.lastName = otherClient.lastName;
            this.address = otherClient.address;
        }
    }
}