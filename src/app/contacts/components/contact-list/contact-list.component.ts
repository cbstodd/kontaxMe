import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAction, AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Contact } from '../../Contact';
import { ContactService } from '../../services/contact.service';
import firebase from 'firebase/compat';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    contactsByCategory$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
    allContacts$: Observable<Contact[]>;
    contacts: Contact[];

    constructor(public contactService: ContactService) {

    }

    ngOnInit() {
        this.allContacts$ = this.contactService.getAllContacts();
        this.contactsByCategory$ = this.contactService.getContactsByCategory();
    }

}
