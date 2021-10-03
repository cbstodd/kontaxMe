import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './components/contact.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactService } from './services/contact.service';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        ContactComponent,
        ContactItemComponent,
        ContactListComponent,
        ContactDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ContactRoutingModule,
    ],
    providers: [
        ContactService
    ]
})
export class ContactModule {}
