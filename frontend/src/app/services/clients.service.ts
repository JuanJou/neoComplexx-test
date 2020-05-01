import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/client";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ClientsService {
  constructor(private httpClient: HttpClient) {}

  getClientById(id: number): Promise<Client> {
    return this.httpClient.get<Client>(`client/${id}`).toPromise();
  }

  getAllClients() {
    return this.httpClient.get<Client>(`client`).toPromise();
  }

  saveNewClient(client: Client) {
    return this.httpClient.post("client", client).toPromise();
  }

  updateOldClient(client: Client) {
    return this.httpClient.put("client", { body: client }).toPromise();
  }

  deleteClient(id: number) {
    return this.httpClient.delete(`client/${id}`).toPromise();
  }
}
