import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../services/clients.service";
import { Client } from "../../models/client";
import { Router } from "@angular/router";

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.css"],
})
export class ClientsListComponent implements OnInit {
  clientsList: Client[];

  constructor(
    private router: Router,
    private clientsService: ClientsService
  ) {}

  async ngOnInit() {
    this.clientsList = await this.clientsService.getAllClients();
  }

  async deleteEntry(client: Client) {
    this.clientsList = await this.clientsService.deleteClient(client.id);
  }

  async editEntry(client: Client) {
    this.router.navigate(["clientForm"], {state:{client: client}});
  }
}
