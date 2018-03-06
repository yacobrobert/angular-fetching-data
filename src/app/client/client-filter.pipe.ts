import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'clientFilter'  
})
export class ClientFilterPipe implements PipeTransform {
    transform(value, searchTerm: string = '') {
        if(searchTerm !== '') {
            let result = value.filter((client) => client.username.toLowerCase().includes(searchTerm.toLowerCase()) 
                                                        || client.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
                                                        || client.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
            return result;
        } else {
            return value;
        }
    }
}