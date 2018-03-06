import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from "./start/start.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FournisseurComponent } from "./fournisseur/fournisseur.component";
import { FactureComponent } from "./facture/facture.component";
import { ClientComponent } from "./client/client.component";
import { ClientDetailsComponent } from "./client/client-details/client-details.component";
import { EditClientComponent } from "app/client/edit-client/edit-client.component";

const appRoutes: Routes = [
    { path: 'start', component: StartComponent },   
    { path: 'client', component: ClientComponent }, 
    { path: 'client/:id', component: ClientDetailsComponent },
    { path: 'facture', component: FactureComponent },
    { path: 'fournisseur', component: FournisseurComponent },
    { path: 'editclient/:id', component: EditClientComponent },
    { path: '', redirectTo: 'start', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}