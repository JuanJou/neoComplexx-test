import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/client";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ClientsService {

  constructor(private httpClient: HttpClient) {}

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`client/${id}`);
  }

  getAllClients() {
    return this.httpClient.get<Client>(`client`);
  }

  saveNewClient(client: Client) {
    return this.httpClient.post("client", client );
  }

  updateOldClient(client: Client) {
    return this.httpClient.put("client", { body: client });
  }

  deleteClient(id: number) {
    return this.httpClient.delete(`client/${id}`);
  }
}
