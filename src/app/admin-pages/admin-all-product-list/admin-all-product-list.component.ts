import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { sellerProduct } from 'src/app/datatyps';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-admin-all-product-list',
  templateUrl: './admin-all-product-list.component.html',
  styleUrls: ['./admin-all-product-list.component.css']
})
export class AdminAllProductListComponent {
  constructor(private adminservice: AdminServiceService, private dealerService: DealerServiceService) { }
  public porductLists: any | undefined[] = []
  private subscriptions: Subscription[] = [];
  public pass = true

  public searchresults: undefined | sellerProduct[]
  public searchresultkeyup: boolean = true;

  public currentpage: number = 1;
  public count: number = 0;
  public tablesize: number = 8;
  public tablesizes: any = [5, 10, 15, 20, 25]

  // ---ngonInit---
  ngOnInit() {
    this.productList()
  }


  // ---functions---

  public productList() {   //get all product list function
    this.subscriptions.push(this.dealerService.getdealersProductlist().subscribe({
      next: (res) => {
        console.warn(res);
        this.porductLists = res

      },
      error: (error) => {
        console.warn('error', error);

      },
      complete: () => {

      },

    }))
  }



  public searchProduct(value: KeyboardEvent) {
    if (value) {
      let element = value.target as HTMLInputElement
      console.warn(element.value);
      this.dealerService.searchProduct(element.value).subscribe({
        next: (res) => {
          this.searchresults = res
          this.searchresultkeyup = true;

          console.warn(this.searchresults);

        }
      })
    }
  }
  public close() {  //searchbox outside click
    this.searchresultkeyup = false;
  }
  public submitSearch(value: any) {

  }
  // -----pagination----

  public onTableDataChange(event: any) {
    this.currentpage = event
    this.productList()

  }
  public onTableSizeChange(event: any) {
    this.tablesize = event.target.value
    this.currentpage = 1;
    this.productList()


  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }

}
