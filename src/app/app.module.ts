import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CoreModule } from './core/core.module';
import { SideNavbarComponent } from './core/components/side-navbar/side-navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        SideNavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
