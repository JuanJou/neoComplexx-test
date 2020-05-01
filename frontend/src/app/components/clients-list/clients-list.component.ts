import { Component, OnInit } from "@angular/core";
import { Client } from "../../models/client";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.css"],
})
export class ClientsListComponent implements OnInit {
  clientsList: Client[];

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe((data) => {
      this.clientsList = data.clients;
      console.log(data);

    });
  }

  ngOnInit() {}
}
