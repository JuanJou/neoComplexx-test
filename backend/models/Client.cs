using System;

namespace backend.models
{
    [Serializable]
    public class Client
    {
        public int? id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string address { get; set; }

    }
}