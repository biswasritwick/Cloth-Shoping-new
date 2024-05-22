import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  @Output()navStatus =new EventEmitter<boolean>()

  navBar:boolean=false
  public responceNavbar(){
  this.navBar=!this.navBar
  this.navStatus.emit(this.navBar)
  }
}
