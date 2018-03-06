import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from "./app-routing.module";
import { StartComponent } from "./start/start.component";
import { FournisseurComponent } from "./fournisseur/fournisseur.component";
import { FactureComponent } from "./facture/facture.component";
import { ClientComponent } from "./client/client.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ClientService } from "./client/client-service";
import { ClientDetailsComponent } from './client/client-details/client-details.component';
import { ClientFilterPipe } from "./client/client-filter.pipe";
import { ObjNgFor } from "./client/client-details/client-obj.pipe";
import { EditClientComponent } from './client/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    FactureComponent,
    FournisseurComponent,
    StartComponent,
    NotFoundComponent,
    ClientDetailsComponent,
    ClientFilterPipe,
    ObjNgFor,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
