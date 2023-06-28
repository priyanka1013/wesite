import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {MatButtonModule} from '@angular/material/button';
import { RequestingComponent } from './requesting/requesting.component';
import {MatIconModule} from '@angular/material/icon';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { DataComponent } from './products/data/data.component';
import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './requesting/payment/payment.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ReviewsComponent,
    RequestingComponent,
    DataComponent,
    PaymentComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule ,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    AdminRoutingModule,
    MatDialogModule
  ]
})
export class AdminModule { }
 