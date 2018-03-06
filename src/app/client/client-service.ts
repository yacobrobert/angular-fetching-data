import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of'
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClientService {
    private data: any; 

    constructor(private _http: Http) {} 
    
    getClientFromApi() {
        return this._http.get('https://jsonplaceholder.typicode.com/users')  
        //  return this._http.get('assets/api/clients.json') accès interne mais ne fonctionne plus à la src            
        // .do(x => console.log(x)) 
        .map(response => {                        
                    this.data = response.json();
                    return this.data;
        });                 
    }    
 
    getClientById(id: number) {
        if(!this.data) {
            return undefined;
        }
        const result = this.data.filter((client:any) => client.id === id);
        if(result.length > 0) {
            return result[0];
        }
    }
}