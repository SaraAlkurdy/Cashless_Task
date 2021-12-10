import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {
  public customerList: any[] = [];
  total: any;
  per_page: any;
  p: number = 1;
  updateResponse: any;
  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  //Customers List
  getCustomerList() {
    return this.http.get('https://reqres.in/api/users?page=' + this.p)
    // .subscribe((response) => {
    //   console.log(response);
    //   this.total = response['total']
    //   this.per_page = response['per_page']
    //   this.customerList = response['data'];
    // }), err => {
    //   console.log(err);

    // }
  }

  //Update Customer List
  updateCustomerList(customerId: number, body) {
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('authorization', localStorage.getItem('token'))
    return this.http.put(`https://reqres.in/api/users/${customerId}`, body, { headers })
  }

  //Delete Customer List
  deleteCustomerItem(customerId: number) {
    this.http.delete(`https://reqres.in/api/users/${customerId}`, { headers: { authorization: localStorage.getItem('token') } }).subscribe((response: any) => {
      console.log(response);
      this.customerList = this.customerList.filter(e => e.id != customerId)
      this._snackBar.open('success')
    }, err => {
      console.log(err);

    })
  }

}
