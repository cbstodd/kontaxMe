import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactService } from './services/contact.service';

const contactRoutes: Routes = [
    {
        path: 'contacts', component: ContactComponent, children: [
            { path: '', component: ContactListComponent },
            { path: ':id', component: ContactDetailsComponent }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'contacts' }
];

@NgModule({
    imports: [
        RouterModule.forChild(contactRoutes)
    ],
    exports: [
        RouterModule
    ],

})
export class ContactRoutingModule {}
