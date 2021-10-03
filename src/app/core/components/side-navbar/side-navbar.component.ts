import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  smLogo: string = './assets/images/logos/kontax_blue_green_logo100px.png';

  constructor() { }

  ngOnInit(): void {
  }

}
