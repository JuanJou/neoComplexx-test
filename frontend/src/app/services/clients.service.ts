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

  getAllClients(): Promise<Client[]>  {
    return this.httpClient.get<Client[]>(`client`).toPromise();
  }

  saveNewClient(client: Client) {
    return this.httpClient.post("client", client).toPromise();
  }

  updateOldClient(client: Client): Promise<Client[]> {
    return this.httpClient.put<Client[]>("client", client ).toPromise();
  }

  deleteClient(id: number): Promise<Client[]>{
    return this.httpClient.delete<Client[]>(`client/${id}`).toPromise();
  }
}
