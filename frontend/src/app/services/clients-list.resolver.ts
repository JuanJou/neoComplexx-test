import { ClientsService } from "../services/clients.service";
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core'; 
import { Client } from "../models/client";
import { Resolve, ActivatedRouteSnapshot, RouterState } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ClientsListResolver implements Resolve<Client> {
  private constructor(private clientsService: ClientsService) {}

  resolve(): Observable<Client> | Promise<Client> | Client {
    return this.clientsService.getAllClients();
  }
}
