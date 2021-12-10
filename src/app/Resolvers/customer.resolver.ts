import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerListService } from '../Services/customer-list.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<boolean> {
  constructor(
    private cutomerListSrv: CustomerListService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {


    return this.cutomerListSrv.getCustomerList();
  }
}
