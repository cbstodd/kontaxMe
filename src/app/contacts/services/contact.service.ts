import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, QueryFn } from '@angular/fire/compat/database';
import { Contact } from '../Contact';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/compat/database';
import { Observable, ObservableInput, Observer, Subject } from 'rxjs';
import { map, switchMapTo } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    public contactList$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
    public queryByName$: Subject<Contact['name']>;


    constructor(private db: AngularFireDatabase) {
        this.contacts$ = db.list<Contact>('contacts').valueChanges();
        this.queryByName$ = new Subject<Contact['name']>();
    }


    getAllContacts() {
        this.contacts$.subscribe((contactsList): Contact[] => {
            console.table(contactsList);
            return this.contacts = contactsList;
        });
    }


}
