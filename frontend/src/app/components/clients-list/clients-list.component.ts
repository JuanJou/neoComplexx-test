import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../services/clients.service";
import { Client } from "../../models/client";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.css"],
})
export class ClientsListComponent implements OnInit {
  clientsList: Client[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientsService: ClientsService
  ) {
    activatedRoute.data.subscribe((data) => {
      this.clientsList = data.clients;
      console.log(data);
    });
  }

  ngOnInit() {}

  async deleteEntry(index: number) {
    console.log(this.clientsList[index]);
    this.clientsList = await this.clientsService.deleteClient(this.clientsList[index].id);
  }
  async editEntry(index: number) {
    console.log(this.clientsList[index]);
    this.clientsList[index].address = 'Shopping';
    this.clientsList = await this.clientsService.updateOldClient(this.clientsList[index]);
  }
}
