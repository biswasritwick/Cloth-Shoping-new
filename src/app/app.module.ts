  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//form control
import{ReactiveFormsModule,FormsModule}from '@angular/forms'

//layouts,coustomer layoutss
import { WebsitesLayoutComponent,NavbarComponent,FooterComponent,MobileNavComponent } from './layouts/coustomer-layouts';

//layouts,admin layoutss
import { AdminWebsitesLayoutsComponent,AdminNavbarComponent, AdminHeaderComponent,AdminFooterComponent} from './layouts/admin-layouts/admin-index';

//layouts,seller layoutss
import { SellerWebsitesLayoutsComponent,SellerNavbarComponent,SellerHeaderComponent,SellerFooterComponent } from './layouts/seller-layouts/seller-index';



import { UserMainhomeComponent } from './user-pages/user-mainhome/user-mainhome.component';
import { UserAboutComponent } from './user-pages/user-about/user-about.component';

import { AdminAllUsersComponent } from './admin-pages/admin-all-users/admin-all-users.component';
import { AdminDashboardComponent } from './admin-pages/admin-dashboard/admin-dashboard.component';
import { AdminAddSellerComponent } from './admin-pages/admin-add-seller/admin-add-seller.component';
import { AdminSellerListComponent } from './admin-pages/admin-seller-list/admin-seller-list.component';
import { AdminCoustomerListComponent } from './admin-pages/admin-coustomer-list/admin-coustomer-list.component';
import { AdminSignupSigninComponent } from './admin-pages/admin-signup-signin/admin-signup-signin.component';
import { AdminAddAdminComponent } from './admin-pages/admin-add-admin/admin-add-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginWebsiteLayoutsComponent } from './layouts/login-layouts/login-website-layouts/login-website-layouts.component';
import { LoginSignUpComponent } from './layouts/login-layouts/login-sign-up/login-sign-up.component';
import { SellerDashboardComponent } from './seller-pages/seller-dashboard/seller-dashboard.component';
import { SellerProfileComponent } from './seller-pages/seller-profile/seller-profile.component';
import { AdminProfileComponent } from './admin-pages/admin-profile/admin-profile.component';
import { SellerAddProductComponent } from './seller-pages/seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './seller-pages/seller-product-list/seller-product-list.component';
import { SellerOrderListComponent } from './seller-pages/seller-order-list/seller-order-list.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { UserProductComponent } from './user-pages/user-product/user-product.component';
import { UserProductDetailsComponent } from './user-pages/user-product-details/user-product-details.component';
import { HighlightsDirective } from './derectives/highlights.directive';
import { AdminAllProductListComponent } from './admin-pages/admin-all-product-list/admin-all-product-list.component';
import { SearchComponent } from './search/search.component';
import { AdminUpdateListComponent } from './update-pages/admin-update-list/admin-update-list.component';
import { SellerUpdateListComponent } from './update-pages/seller-update-list/seller-update-list.component';
import { AddToCartComponent } from './cart-page/add-to-cart/add-to-cart.component';
import { SellerOrderListDetailsComponent } from './seller-pages/seller-order-list-details/seller-order-list-details.component';
import { UserMyOrderListComponent } from './user-pages/user-my-order-list/user-my-order-list.component';
import { UserMyOrderDetailsComponent } from './user-pages/user-my-order-details/user-my-order-details.component';
;


@NgModule({
  declarations: [
    AppComponent,
    WebsitesLayoutComponent,
    NavbarComponent,
    FooterComponent,
    MobileNavComponent,
    UserMainhomeComponent,
    UserAboutComponent,
    AdminWebsitesLayoutsComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    AdminAllUsersComponent,
    AdminDashboardComponent,
    AdminAddSellerComponent,
    AdminSellerListComponent,
    AdminCoustomerListComponent,
    AdminSignupSigninComponent,
    AdminAddAdminComponent,
    LoginWebsiteLayoutsComponent,
    LoginSignUpComponent,
    SellerFooterComponent,
    SellerHeaderComponent,
    SellerNavbarComponent,
    SellerWebsitesLayoutsComponent,
    SellerDashboardComponent,
    SellerProfileComponent,
    AdminProfileComponent,
    SellerAddProductComponent,
    SellerProductListComponent,
    SellerOrderListComponent,
    UserProductComponent,
    UserProductDetailsComponent,
    HighlightsDirective,
    AdminAllProductListComponent,
    SearchComponent,
    AdminUpdateListComponent,
    SellerUpdateListComponent,
    AddToCartComponent,
    SellerOrderListDetailsComponent,
    UserMyOrderListComponent,
    UserMyOrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    JsonPipe,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
