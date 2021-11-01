import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject, QueryFn } from '@angular/fire/compat/database';
import { Contact } from '../Contact';
import { Observable, Observer, Subject } from 'rxjs';
import { switchMapTo } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    public contacts: AngularFireList<Contact[]>;
    public contact$: AngularFireObject<Contact>;
    public contacts$: Observable<Contact[]>;
    public contactList: Contact[];
    queryByName$: Subject<Contact['name']>;


    constructor(private db: AngularFireDatabase) {
        this.queryByName$ = new Subject<Contact['name']>();
    }


    getAllContacts(selectedValue: string) {
        return this.contacts$.subscribe((contacts): any => {
            if (selectedValue && contacts) {
                this.queryByName$.pipe(
                    switchMapTo((contacts): Observable => {
                        return this.db.list<Contact>('contacts', (ref) => {
                            ref
                                .orderByChild('name')
                                .equalTo(contacts.name);
                        }
                    }
                    )
            } else if (!selectedValue && contacts) {
                this.contactList = contacts;
            } else {
                return null;
            }
        }
    }


}
