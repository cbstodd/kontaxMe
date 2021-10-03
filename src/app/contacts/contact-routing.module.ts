import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

const contactRoutes: Routes = [
    {
        path: '', component: ContactComponent, children: [
            { path: '', component: ContactListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(contactRoutes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
