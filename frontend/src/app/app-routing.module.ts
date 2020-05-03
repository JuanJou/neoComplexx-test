import { NgModule } from '@angular/core';
import { ClientsFormComponent } from './components/clients-form/clients-form.component'; 
import { ClientsListComponent } from './components/clients-list/clients-list.component'; 
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'clientForm',
    pathMatch: 'full'
  },
  {
    path: 'clientsList',
    component: ClientsListComponent,
  },
  {
    path: 'clientForm',
    component: ClientsFormComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
