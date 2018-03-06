import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm, FormGroup, FormArray, FormControl } from "@angular/forms";

import { ClientService } from "../../client/client-service";


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})

export class EditClientComponent implements OnInit {
  editMode = false;
  editedItemIndex: number;
  clientForm: FormGroup;

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute ) {}

  ngOnInit() {   
    this.route.params.subscribe(
      (params: Params) => {
        this.editedItemIndex = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    ); 
  }

  onSubmit() {
    console.log(this.clientForm);
  }

  private initForm() {
    let clientId = '';
    let clientName = '';
    let clientUsername = '';
    let clientEmail = ''; 
    let clientStreet = '';
    let clientSuite ='';
    let clientCity = '';
    let clientZipcode = '';
    let clientLat = '';
    let clientLng = '';
    let clientPhone = ''; 
    let clientWebsite = '';
    let clientCompanyName = '';
    let clientCatchPhrase = '';
    let clientBs = '';


    if (this.editMode) {
      const client = this.clientService.getClientById(this.editedItemIndex);
      if (client == undefined) {
        this.router.navigate(['/client']);
      }
      if(client !== undefined) {
      clientId = client.id;
      clientName = client.name;
      clientUsername = client.username;
      clientEmail = client.email;
      clientStreet = client.address.street;
      clientSuite = client.address.suite;
      clientCity = client.address.city;
      clientZipcode = client.address.zipcode;
      clientLat = client.address.geo.lat;
      clientLng = client.address.geo.lng;
      clientPhone = client.phone; 
      clientWebsite = client.website;
      clientCompanyName = client.company.name;
      clientCatchPhrase = client.company.catchPhrase;
      clientBs = client.company.bs;
      }      
    }

    this.clientForm = new FormGroup({
      'id': new FormControl(clientId),
      'name': new FormControl(clientName),
      'userName': new FormControl(clientUsername),
      'email': new FormControl(clientEmail),
      'city': new FormControl(clientCity),
      'street': new FormControl(clientStreet),
      'suite': new FormControl(clientSuite),
      'zipcode': new FormControl(clientZipcode),
      'lat': new FormControl(clientLat),
      'lng': new FormControl(clientLng),
      'phone': new FormControl(clientPhone),
      'website': new FormControl(clientWebsite),
      'companyName': new FormControl(clientCompanyName),
      'phrase': new FormControl(clientCatchPhrase),
      'bs': new FormControl(clientBs),
    });
  }
}
