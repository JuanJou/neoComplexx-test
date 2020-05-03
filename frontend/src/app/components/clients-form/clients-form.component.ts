import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from "../../models/client";
import { ClientsService } from "../../services/clients.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "clients-form",
  templateUrl: "./clients-form.component.html",
  styleUrls: ["./clients-form.component.css"],
})
export class ClientsFormComponent implements OnInit {
  clientForm: FormGroup = this.formBuilder.group({
    id: [null],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: ["", Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private router: Router
  ) {
    const currentState = this.router.getCurrentNavigation().extras.state;
    if (currentState) this.clientForm.setValue(currentState.client);
  }

  ngOnInit() {}

  async onSubmit() {
    let client: Client = new Client(this.clientForm.value);
    if (client.id) await this.clientService.updateOldClient(client);
    else await this.clientService.saveNewClient(client);
    this.router.navigate(["clientsList"]);
  }
}
