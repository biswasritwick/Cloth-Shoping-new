import { Component } from '@angular/core';
import { sellerProduct } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent {
  public frontProducts: sellerProduct[] = []
  panel = false

  public currentpage: number = 1;
  public count: number = 0;
  public tablesize: number = 10;
  public tablesizes: any = [5, 10, 15, 20, 25]
  constructor(private delerService: DealerServiceService) { }

  ngOnInit() {
    this.delerService.getdealersProductlist().subscribe({
      next: (result) => {
        console.log(result);
        this.frontProducts = result
      }
    })
  }

  fun(show:any){
    this.panel=show
    // console.warn(show  );
    
  }

}
