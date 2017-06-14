import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdInputModule, MdSidenavModule, 
  MdToolbarModule, MdListModule, MdIconModule, MdDialogModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsComponent, AddContactDialog } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

import { ContactsService } from './contacts.service';

const routes: Routes = [
  {
    path: '',
    component: PopularComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PopularComponent,
    AddContactDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdIconModule,
    MdDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent],
  entryComponents: [AddContactDialog]
})
export class AppModule { }
