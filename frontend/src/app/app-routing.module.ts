import { NgModule } from '@angular/core';
import { ClientsFormComponent } from './components/clients-form/clients-form.component'; 
import { ClientsListResolver } from './services/clients-list.resolver'; 
import { ClientsListComponent } from './components/clients-list/clients-list.component'; 
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'newClient',
    pathMatch: 'full'
  },
  {
    path: 'clientsList',
    component: ClientsListComponent,
    resolve: { clients: ClientsListResolver }
  },
  {
    path: 'newClient',
    component: ClientsFormComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
