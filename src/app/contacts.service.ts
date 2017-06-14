import { Injectable } from '@angular/core';

interface IContact {
  name: string;
  number: string;
}

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(){
    let contacts: IContact[] = [{
      name: 'Janez',
      number: '938474839'
    },{
      name: 'Mariah',
      number: '979347387'
    },
    {
      name: 'Wilson',
      number: '936478346'
    },{
      name: 'Aria',
      number: '984746638'
    }];
    return contacts;
  }
}
