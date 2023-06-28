import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RequestingComponent } from './requesting/requesting.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from '../login/login.component';
import { LandlordDataComponent } from '../landlord-data/landlord-data.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'product',component:ProductsComponent},
  {path:'review',component:ReviewsComponent},
  {path:'requesting',component:RequestingComponent}, 
  {path:'login',component:LoginComponent}, 
  {path:'landlord',component:LandlordDataComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
