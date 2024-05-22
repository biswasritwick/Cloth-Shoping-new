import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSellerListComponent } from '../admin-seller-list.component';
import { AdminAddSellerComponent } from '../../admin-add-seller/admin-add-seller.component';
import { telecallerGuard } from 'src/app/auth-file/telecaller-auth/telecaller.guard';
import { SellerProfileComponent } from 'src/app/seller-pages/seller-profile/seller-profile.component';

const routes: Routes = [
  {
    path:'',
    component:AdminSellerListComponent
  },{
    path:'admin-add-seller',
    component:AdminAddSellerComponent,canActivate:[telecallerGuard]
  },
  {path:'seller-profile/:sellerid',
  component:SellerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSellerModuleRoutingModule { }
