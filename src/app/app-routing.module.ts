import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContactModule } from './contacts/contact.module';

const appRoutes: Routes = [
    { path: '', component: AppComponent },
    {
        path: 'contacts',
        loadChildren: () => import('./contacts/contact.module')
          .then((m): ContactModule => {
              return m.ContactModule;
          })

    },
    { path: '**', pathMatch: 'full', redirectTo: '/contacts' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CoreModule
    ],
    exports: [
        RouterModule,
        CoreModule
    ]
})
export class AppRoutingModule {}
