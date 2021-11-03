import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Contact } from '../../Contact';
import { ContactService } from '../../services/contact.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    contacts$: Observable<Contact[]> | void;
    contacts: Contact[];

    constructor(public contactService: ContactService) {

    }

    ngOnInit() {
        this.contacts$ = this.contactService.getAllContacts();
    }

}
