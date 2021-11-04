import { Injectable } from '@angular/core';
import {
    AngularFireDatabase,
    AngularFireAction,
    AngularFireList,
    AngularFireObject,
    QueryFn
} from '@angular/fire/compat/database';
import { Contact } from '../Contact';
import { BehaviorSubject, Observable, ObservableInput, Observer, Subject } from 'rxjs';
import { map, switchMap, switchMapTo } from 'rxjs/operators';
import firebase from 'firebase/compat';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    public contacts$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
    public allContacts$: Observable<Contact[]>;
    public category$: BehaviorSubject<string>;

    constructor(public db: AngularFireDatabase) {

    }

    getAllContacts(): Observable<Contact[]> {
        this.allContacts$ = this.db.list<Contact>('contacts').valueChanges();
        return this.allContacts$;
    }

    getContactsByCategory(): Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
        this.category$ = new BehaviorSubject('');
        this.contacts$ = this.category$.pipe(
          switchMap(category =>
            this.db.list<Contact>('/contacts', ref =>
              category ? ref.orderByChild('category').equalTo(category) : ref
            ).snapshotChanges()
          )
        );
        return this.contacts$;
    }

    filterBy(category: string) {
        this.category$.next(category);
    }


}
