import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Dealersdata, sellerProduct } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  public service: any;
  public application: any;
  public sellerCheck = true
  public sellerID: any = ''
  public category: any = ''
  public gender: any = ''
  private subscriptions: Subscription[] = [];

  public isFormSubmit: boolean = false


  constructor(private dealersService: DealerServiceService, private adminservice: AdminServiceService, private router: Router) { }

  ngOnInit() {
    this.afterLogin()
  }

  private afterLogin() {    // which type of user 
    // let usertype = localStorage.getItem('userType')
    this.dealersService.logData()
    this.dealersService.sellerLogData.subscribe({
      next: (value: any) => {
        for (let data of value) {
          this.sellerID = data.id
        }
      },
      error: (err: any) => {
        console.warn(err, 'localStorage data not found');
      },
    })

  }
  categoryValue(e: any) {
    console.log(e.target.value);
    this.category = e.target.value

  }

  addUserdata(data: sellerProduct) {
    this.isFormSubmit = true
    let date = new Date()  //date stamp
    var da = date.toLocaleDateString()    //date stamp
    let dealerFormData = {  //date stamp + rescive form data
      ...data,
      createdOn: da,
      dealerID: this.sellerID,
      product_category: this.category,

    }
    this.subscriptions.push(this.dealersService.dealersAddproduct(dealerFormData).subscribe({
      next: (result) => {
        console.warn(result);
      },
      error: (result) => {
        console.warn(result,'form data not fatched');
      }
    }))
  }





  products = [
    
    {
      value: 'shirt',
      valueName: ' shirt',
    },
    {
      value: 'kurta',
      valueName: ' kurta',
    },
    {
      value: 'jeance',
      valueName: ' jeance',
    },
    {
      value: 't-shirt',
      valueName: 't-shirt',
    },
    {
      value: 'punjabi',
      valueName: ' punjabi',
    },
    {
      value: 'kurti',
      valueName: ' kurti',
    },
    {
      value: 'sharee',
      valueName: ' sharee',
    },
    {
      value: 'trouser',
      valueName: ' trouser',
    },
    {
      value: 'phone',
      valueName: ' phone',
    },
    {
      value: 'electronics',
      valueName: ' electronics',
    },{
      value: 'other',
      valueName: ' other',
    },
  ]
}
