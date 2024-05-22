import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dealersdata, adminData } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-admin-add-seller',
  templateUrl: './admin-add-seller.component.html',
  styleUrls: ['./admin-add-seller.component.css']
})
export class AdminAddSellerComponent {
  public service: any;
  public application: any;
  public sellerCheck = true
  public adminAllemploy: any = []
  private subscriptions: Subscription[] = [];



  constructor(private dealersService: DealerServiceService, private adminservice: AdminServiceService,private router:Router) { }

  ngOnInit() {
    this.getAllAdminData()
  }

  private getAllAdminData() {
    this.adminservice.logData()
    this.adminservice.employeLogData.subscribe({
      next: (value: adminData) => {
        console.log(value);
        this.adminAllemploy = value
        this.adminAllemploy.forEach((element: any) => {
          console.warn(element.service);
          console.warn(element);
    
        });

      },
      error: (err: any) => {
        console.warn(err, 'localStorage data not found');
      },
      complete: ()=> {
      
      },
    })
  }


  addUserdata(data: Dealersdata) {
    console.warn(data);
    let date = new Date()  //date stamp
    var da = date.toLocaleDateString()    //date stamp
    let dealerFormData = {  //date stamp + rescive form data
      ...data,
      createdOn: da

    }
    this.subscriptions.push(this.dealersService.dealersAdd(dealerFormData).subscribe({
      next: (result) => {
        if (result) {
          console.warn(true);
          console.warn(result);
        }
      },
      error: (error) => {
        console.log("Form api error!", error);
      },
      complete: () => {
        console.warn('complete');
      }
    }))

  }
}
