import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent {
  @Input() sidenavstatus: boolean = false

  sidenav = [
    {
      number: 1,
      name: 'home',
      icone: 'fa-solid fa-house',
      routerlink: '/user-home'
    },
    {
      number: 2,
      name: 'produtc',
      icone: 'fa-solid fa-house',
      routerlink: ''
    },

    {
      number: 3,
      name: 'about',
      icone: 'fa-solid fa-house',
      routerlink: ''
    },
    {
      number: 4,
      name: 'my orders',
      icone: 'fa-solid fa-house',
      routerlink: '/user-about'
    },
    {
      number: 5,
      name: 'log in',
      icone: 'fa-solid fa-house',
      routerlink: '/user-contact'
    },
    {
      number: 6,
      name: 'admin',
      icone: 'fa-solid fa-house',
    },
    {
      number: 7,
      name: 'seller',
      icone: 'fa-solid fa-house',
    },
  ]
}
