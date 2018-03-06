import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ClientService } from "../../client/client-service";

@Component({
  moduleId: module.id,
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: number;   
  client: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private clientService: ClientService) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];  
    this.client = this.clientService.getClientById(this.id);
    if (this.client !== undefined) {
      
    }
  }

  goBack() {
    this.router.navigate(['/client']);
  }
} 
