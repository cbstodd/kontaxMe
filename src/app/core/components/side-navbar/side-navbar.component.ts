import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-navbar',
    templateUrl: './side-navbar.component.html',
    styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
    iconLogo100: string = './assets/images/logos/kontax_wicon_carolina_n_persian_100px.png';
    iconLogo260: string = './assets/images/logos/kontax_wicon_carolina_n_persian_260px.png';
    bgColor = '.main-outlet';


    constructor() {

    }

    ngOnInit(): void {

    }

}
