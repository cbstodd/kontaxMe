import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Contact } from '../../contact';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
    contacts$!: Observable<Contact[]>;
    contacts!: Contact[];

    constructor(private db: AngularFireDatabase) {

    }

    ngOnInit(): void {
       this.contacts$ = this.db.list<Contact>('contacts').valueChanges();
        this.contacts$.subscribe((contacts: Contact[]) => {
            this.contacts = contacts;
        })
    }

}
