import { Component, OnInit } from '@angular/core';

import { ClientService } from "./client-service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit { 
   clients = []; 
   searchTerm: string;
      
   constructor(private _clientService: ClientService) {}

    ngOnInit() {
      this._clientService.getClientFromApi()
        .subscribe(
            res => this.clients = res, 
            err => console.error('error : ' + err.status)
        );        
    }    
}
