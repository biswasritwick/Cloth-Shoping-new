import { Component } from '@angular/core';
import { coustomerData } from 'src/app/datatyps';
import { CoustomerService } from 'src/app/services/coustomer.service';

@Component({
  selector: 'app-admin-coustomer-list',
  templateUrl: './admin-coustomer-list.component.html',
  styleUrls: ['./admin-coustomer-list.component.css']
})
export class AdminCoustomerListComponent {
  public Coustomers: coustomerData[] = []

  constructor(private coustomerService: CoustomerService) { }

  ngOnInit() {
    this.getCoustomerAlllist()
  }

  getCoustomerAlllist() {
    this.coustomerService.getcoustomerslist().subscribe({
      next: (result) => {
        this.Coustomers = result
        console.log( this.Coustomers);

      }
    })
  }
}
