import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'; 
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
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    address: ["", Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private router: Router
  ) {}

  ngOnInit() {}

  async onSubmit() {
    let client: Client = new Client(this.clientForm.value);
    const clients = await this.clientService.saveNewClient(client);
    console.log(clients);
    this.router.navigate([ 'clientsList' ]);

  }
}
