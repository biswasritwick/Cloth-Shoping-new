import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAllUsersComponent } from '../admin-all-users.component';
import { AdminAddAdminComponent } from '../../admin-add-admin/admin-add-admin.component';
import { AdminProfileComponent } from '../../admin-profile/admin-profile.component';
import { AdminUpdateListComponent } from 'src/app/update-pages/admin-update-list/admin-update-list.component';

const routes: Routes = [
  {
    path:'',
    component:AdminAllUsersComponent
  },
  {
    path:'admin-add-user',
    component:AdminAddAdminComponent 
  },{
    path:'admin-profile/:adminid',
    component:AdminProfileComponent
  },{
    path:'admin-updatelist/:adminid',
    component:AdminUpdateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAddUserModuleRoutingModule { }
