import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment'; 
import { BaseUrlInterceptor } from './interceptors/baseUrlInterceptor'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsFormComponent } from './components/clients-form/clients-form.component';
import {ClientsService} from './services/clients.service';


@NgModule({
  declarations: [
    AppComponent,
    ClientsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ClientsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: 'BASE_API_URL',
      useValue: environment.baseUrl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
