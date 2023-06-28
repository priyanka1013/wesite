import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataComponent } from './data/data.component';
import { LoginserviceService } from 'src/app/login/loginservice.service';
import { DetailsComponent } from 'src/app/landlord-data/details/details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productlist: any
  user: any
  searchKeyword: any = '';


  constructor(

    private dialog: MatDialog,
    private service: LoginserviceService
  ) { }
  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem("login_data") || '{}')


    if (this.user.VC_user_type == 'tenent') {
      this.getdata();
    }
    else {
      this.getlandlord_data(this.user.INT_user_id);
    }
  }

  // Returning The PurchasesFor tenant
  getdata() {
    this.service.Getproducts(this.searchKeyword).subscribe((res: any) => {
      this.productlist = res['Data']
    })
  }
  // Returning The PurchasesFor Landlord
  getlandlord_data(landlord: any) {
    var list = {
      Int_lanlord_id: landlord
    }
    this.service.Getlanlorddata(list).subscribe((res: any) => {
      this.productlist = res['Data']

    })

  }

  cleardata() {
    this.searchKeyword = ''
    this.service.Getproducts(this.searchKeyword).subscribe((res: any) => {
      this.productlist = res['Data']


    })
  }

  // list = [
  //   { name: 'Suncity', image: '../../../assets/house1.jpg', address: 'New Plam-Vihar', type: '3BHK', price: '35000/month', security: '2000' },
  //   { name: 'Cityview', image: '../../../assets/house2.jpg', address: 'Utter-Pradesh', type: '2BHK', price: '25000/month', security: '5000' },
  //   { name: 'Sunshine Place', image: '../../../assets/house3.jpg', address: 'shimla', type: '2BHK', price: '20000/month', security: '2000' },
  //   { name: 'Paradise Palms', image: '../../../assets/house4.jpg', address: 'New-Delhi', type: '3BHK', price: '45000/month', security: '1000' }
  // ]

  opendialog(item: any) {
    this.dialog.open(DataComponent, {
      data: item,
      width: '60%',
      height: '400px'
    });
  }

  openedit(item: any) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      data: item,
      width: '60%',
      height: '600px',

    });
    dialogRef.afterClosed().subscribe(d => {
      this.getlandlord_data(this.user.INT_user_id);
    });
  }
  openbox() {
    const dialogRef = this.dialog.open(DetailsComponent, {
  
      width: '60%',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe(d => {
      this.getlandlord_data(this.user.INT_user_id);
    });
  }
  deletet(item: any) {
    this.service.delete_data(item.INT_product_id).subscribe((res: any) => {
      if (res['Success'] == true) {
        this.getlandlord_data(this.user.INT_user_id)
      }

    })

  }
}
