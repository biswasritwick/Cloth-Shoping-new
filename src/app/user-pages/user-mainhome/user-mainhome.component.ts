import { Component } from '@angular/core';
import { sellerProduct } from 'src/app/datatyps';
import { DealerServiceService } from 'src/app/services/dealer-service.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-mainhome',
  templateUrl: './user-mainhome.component.html',
  styleUrls: ['./user-mainhome.component.css']
})
export class UserMainhomeComponent {
  public frontProducts: sellerProduct[] = []
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.productService.getProductlistforCoustomer().subscribe({
      next: (result) => {
        console.log(result);

        this.frontProducts = result
      }
    })
  }
}
