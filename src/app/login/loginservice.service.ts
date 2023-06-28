import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }
  get_logindetails(data:any) {
    return this.http.post('https://localhost:44332/api/login',data);
  }
  register(detail:any){
    return this.http.post('https://localhost:44332/api/users',detail);
  }
  add_requesting (dataa:any){
    return this.http.post('https://localhost:44332/api/requesting',dataa);
  }
  Getproducts(serch:any) {
    return this.http.get('https://localhost:44332/api/purchasing?keyword='+serch);
  }
  Getpurchase(purchasedata:any) {
    return this.http.post('https://localhost:44332/api/get_requesting',purchasedata);
  }
insert_purchase(detail:any){
    return this.http.post('https://localhost:44332/api/insert_purchase',detail);
  }
  Getlanlorddata(landlorddata:any) {
    return this.http.post('https://localhost:44332/api/get_purchases',landlorddata);
  }
delete_data(product_id:any)
{
  return this.http.get('https://localhost:44332/api/delete_purchase?product_id='+product_id)
}
insert_payment(detail:any){
  return this.http.post('https://localhost:44332/api/insert_payment',detail);
}

}
