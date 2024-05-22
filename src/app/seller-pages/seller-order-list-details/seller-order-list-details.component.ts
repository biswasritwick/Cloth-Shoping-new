import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-order-list-details',
  templateUrl: './seller-order-list-details.component.html',
  styleUrls: ['./seller-order-list-details.component.css']
})
export class SellerOrderListDetailsComponent {
  public productDetails: undefined | any

 
  constructor(private router: Router, private ActivatedRoute: ActivatedRoute,private productService:ProductService ) { }


  ngOnInit() {
    this.showProfileDetails()

  }

  public showProfileDetails() {   //separet details when i click profile button
   
      let orderId = this.ActivatedRoute.snapshot.paramMap.get('id')
      orderId && this.productService.sellerOrderedListResponce(orderId).subscribe({
        next: (value) => {
          console.warn(value);
          this.productDetails = value

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
