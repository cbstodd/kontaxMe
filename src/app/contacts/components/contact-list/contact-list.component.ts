import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Contact } from '../../Contact';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    contacts$: Observable<Contact[]>;
    contacts: Contact[];

    constructor(private contactService: ContactService) {

    }

    ngOnInit(): void {
        this.contacts$ = this.contactService.getAllContacts((contacts: Contact[]) => {
            this.contacts = contacts;
            console.table(contacts);
        });
    }

}
