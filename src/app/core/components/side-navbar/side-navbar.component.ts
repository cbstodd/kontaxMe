import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
    pageTitle: string = 'All Contacts';
    iconLogo100: string = './assets/images/logos/kontax_wicon_carolina_n_persian_100px.png';
    kontaxWireFont: string = './assets/images/logos/kontax_blue_green_logo100px.png';
    bgColor = '.main-outlet';


    constructor() {

    }

    ngOnInit(): void {
    }

}
