import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dealersdata, adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent {
  public dealersDetails: undefined | any
  public logTelecaller = true
  public logseller = true
  private subscriptions: Subscription[] = [];
  public admins: any | undefined[] = []
  public adminAllemploy: adminData[] = []

  constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private dealerService: DealerServiceService, private adminService: AdminServiceService) { }

  ngOnInit() {
    this.showProfileDetails()
    this.afterLogin()

  }


  // all Function

  public adminList() {
    this.subscriptions.push(this.adminService.getAdminList().subscribe({
      next: (res) => {
        console.warn(res);
        this.admins = res
      },
      error: (error) => {

      },
      complete: () => {

      },

    }))
  }
  public showProfileDetails() {   //separet details when i click profile button
    let logSellerid = localStorage.getItem('seller')
    if (logSellerid!) {
      logSellerid && this.dealerService.getDetails(logSellerid).subscribe({
        next: (value) => {
          console.warn('seller log', value);
          this.dealersDetails = value
          this.logseller = false

        }
      })
    } else {
      let productId = this.ActivatedRoute.snapshot.paramMap.get('sellerid')
      productId && this.dealerService.getDetails(productId).subscribe({
        next: (value) => {
          console.warn(value);
          this.dealersDetails = value

        },
        error: (value) => {
          console.error(value, 'error');

        },
        complete: () => {

        }
        ,
      })
    }

  }

  private afterLogin() {    //when any employe login, which type of user   
    let usertype = localStorage.getItem('userType')
    this.adminService.logData()
    this.adminService.employeLogData.subscribe({
      next: (value: adminData) => {
        this.adminAllemploy = [value]
        console.warn(value);

      },
      error: (err: any) => {
        console.warn(err, 'localStorage data not found');

      }, complete: () => {
        this.adminAllemploy.forEach((element: adminData) => {
          // console.warn(element.service);
          console.warn(element);      //login persion details
          if (element.service === true && element.telecaller === false) {
            console.warn('permission service', true);
            this.logTelecaller = true

          } else if (element.telecaller === true && element.service === false) {
            console.warn('permission telecaller', true);
            this.logTelecaller = false

          } else {
            console.warn('permission ERROR');
            this.logTelecaller = false

          }

        });
      }
    })
  }
}
