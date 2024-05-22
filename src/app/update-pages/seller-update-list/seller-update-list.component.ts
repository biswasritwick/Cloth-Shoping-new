import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dealersdata } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-update-list',
  templateUrl: './seller-update-list.component.html',
  styleUrls: ['./seller-update-list.component.css']
})
export class SellerUpdateListComponent {
  public sellerCheck = true
  public editAdminDatalist: Dealersdata | undefined

  constructor(private dealerService: DealerServiceService, private Activateroute: ActivatedRoute) { }


  ngOnInit() {
    let sellerId = this.Activateroute.snapshot.paramMap.get('sellerid')
    sellerId && this.dealerService.getDetails(sellerId).subscribe({
      next: (res) => {
        this.editAdminDatalist = res

      }, error: () => {

      }, complete: () => {

      }
    })

  }
  addUpdatedata(data: Dealersdata) {
    console.warn(data);
    if(this.editAdminDatalist!){
      data.id=this.editAdminDatalist.id
    }

    this.dealerService.UpdateDetails(data).subscribe({
      next: (res) => {
        console.warn(res);

      }, error: () => {

      }, complete: () => {

      }
    })

  }
}
