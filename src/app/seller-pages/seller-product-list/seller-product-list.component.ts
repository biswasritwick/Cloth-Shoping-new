import { Component } from '@angular/core';
import { sellerProduct } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-seller-product-list',
  templateUrl: './seller-product-list.component.html',
  styleUrls: ['./seller-product-list.component.css']
})
export class SellerProductListComponent {
  public productLists: any | undefined

  
  public searchresults: undefined | sellerProduct[]
  public searchresultkeyup: boolean = true;

  public currentpage: number = 1;
  public count: number = 0;
  public tablesize: number = 8;
  public tablesizes: any = [5, 10, 15, 20, 25]
  constructor(private dealerService: DealerServiceService) { }

  ngOnInit() {
    this.sellerProduct()
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
  public trackProducts(index: number, products: unknown): number {
    return index
  }
  public sellerProduct() {
    let sellerLogId = localStorage.getItem('seller')
    this.dealerService.getsellerProducttList(sellerLogId).subscribe({
      next: (result) => {
        console.log(result);
        this.productLists = result


      }
    })
  }
}
