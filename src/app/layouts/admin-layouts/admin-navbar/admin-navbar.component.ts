import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  @Input() navstatus: boolean = false
  public menuType: string = 'default'
  public adminAllemploy: any = []
  public flag: number = 0


  //constructor part
  constructor(private adminService: AdminServiceService, private router: Router) { }

  //ngOnInit part
  ngOnInit() { 
    this.afterLogin()
  }

  // featch all data
  private afterLogin() {
    let usertype = localStorage.getItem('userType')
    this.adminService.logData()
    this.adminService.employeLogData.subscribe({
      next: (value: adminData) => {
        this.adminAllemploy = value
        this.adminAllemploy.forEach((element: any) => {
          // console.warn(element.service);
          console.warn(element);      //login persion details
          if (element.service === true && element.telecaller === false) {
            console.warn('permission service', true);
            this.menuType = 'default'

          } else if (element.telecaller === true && element.service === false) {
            console.warn('permission telecaller', true);
            this.menuType = 'telecaller'

          } else {
            console.warn('permission ERROR');
            alert('permission ERROR  (Pleace Contact Admin Section)')

            localStorage.removeItem('employe')
            localStorage.removeItem('userType')
            this.router.navigate(['/login-page-layout/loginpage'])
          }

        });
      },
      error: (err: any) => {
        console.warn(err, 'localStorage data not found');

      },
    })
  }

  // all Function

  public logout() {
    let LocalStorageValue = localStorage.getItem('employe')
    if (LocalStorageValue!) {
      console.warn(true);
      localStorage.removeItem('employe')
      localStorage.removeItem('userType')
      if (!localStorage.getItem('employe')) {
        console.warn(true, 'empty');
        this.router.navigate(['login-page-layout']);

      }

    } else {
      console.error('localStorage are allready empty');

    }
  }


  navitems = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-gauge',
      routlink: '/admin',
      role: ['sevice', 'telecaller']
    },
    {
      number: '2',
      name: 'admin',
      icon: 'fa-regular fa-user',
      routlink: './admin-user-list',
      role: ['sevice']

    },
    {
      number: '3',
      name: 'dealers',
      icon: 'fa-solid fa-house',
      routlink: './admin-seller-list',
      role: ['sevice', 'Telecaller']

    },
    {
      number: '4',
      name: 'coustomer',
      icon: 'fa-solid fa-house',
      routlink: './admin-coustomer-list',
      role: ['sevice', 'Telecaller']

    },
    {
      number: '5',
      name: 'products',
      icon: 'fa-solid fa-list',
      routlink: './admin-allproducts',
      role: ['sevice', 'Telecaller']

    },
    {
      number: '6',
      name: 'coustomer products list',
      icon: 'fa-solid fa-list',
      routlink: '',
      role: ['sevice', 'Telecaller']

    },
    {
      number: '7',
      name: 'media',
      icon: 'fa-solid fa-image',
      routlink: '',
      role: ['sevice']

    },

    {
      number: '8',
      name: 'settings',
      icon: 'fa-solid fa-gear',
      routlink: '',
      role: ['sevice', 'Telecaller']

    }
  ]



  navitemsTelecallers = [
    {
      number: '1',
      name: 'dashboard',
      icon: 'fa-solid fa-gauge',
      routlink: '/admin'
    },

    {
      number: '2',
      name: 'dealers',
      icon: 'fa-solid fa-house',
      routlink: './admin-seller-list'

    },
    {
      number: '3',
      name: 'coustomer',
      icon: 'fa-solid fa-house',
      routlink: './admin-coustomer-list'

    },
    {
      number: '4',
      name: 'products',
      icon: 'fa-solid fa-list',
      routlink: ''

    },
    {
      number: '5',
      name: 'coustomer products list',
      icon: 'fa-solid fa-list',
      routlink: ''

    },

    {
      number: '6',
      name: 'settings',
      icon: 'fa-solid fa-gear',
      routlink: ''

    }
  ]
}
