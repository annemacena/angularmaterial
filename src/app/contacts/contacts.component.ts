import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts: any[];

  constructor(
    private contactsService: ContactsService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  add() {
  let dialogRef = this.dialog.open(AddContactDialog);

  dialogRef.afterClosed().subscribe(contact => {
    if(contact) {
      this.contacts.push(contact);
    }
  });
  }

  delete(contact: any) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
  }
}

@Component({
  selector: 'add-contact-dialog',
  template: `
      <h1 md-dialog-title>Add contact</h1>
      <md-input-container>
        <input  mdInput #contactName placeholder="Contact name">
      </md-input-container>
      <md-input-container>
        <input  mdInput #contactNumber placeholder="Contact number">
      </md-input-container><br>
      <button md-raised-button color="primary" (click)="dialogRef.close({
        name: contactName.value,
        number: contactNumber.value
      })">Save</button>
      <button md-raised-button (click)="dialogRef.close()">Close</button>
  `
})

export class AddContactDialog {
  constructor(
    public dialogRef: MdDialogRef<AddContactDialog>
  ){}
}