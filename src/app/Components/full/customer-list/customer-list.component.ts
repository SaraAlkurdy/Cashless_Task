import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CustomerListService } from 'src/app/Services/customer-list.service';
import { CustomerUpdateComponent } from '../customer-update/customer-update.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList: any[];
  total: any;
  per_page: any;
  p: number = 1;

  constructor(
    public customerListSrv: CustomerListService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList() {
    this.activatedRoute.data.subscribe((response: any) => {
      console.log(response);
      this.customerList = response.customer.data;
      this.total = response.customer.total
      this.per_page = response.customer.per_page

    })
  }

  pageChanged(event) {
    console.log(event);
    this.customerListSrv.p = event;
    this.customerListSrv.getCustomerList().subscribe(response => {
      console.log(response);
      this.customerList = response['data'];
      this.total = response['total'];
      this.per_page = response['per_page'];
      this.p = response['page'];

    })
  }
  openUpdateDialog(item) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      title: 'update customer data',
      data: item
    };

    let dialogRef = this.dialog.open(CustomerUpdateComponent, dialogConfig
    );

    dialogRef.afterClosed().subscribe(result => {
      // let transform = JSON.parse(result)
      console.log(result);
      let index = this.customerListSrv.customerList.findIndex(el => el.id == result.id);
      console.log(this.customerListSrv.customerList, index);

      this.customerListSrv.customerList[index] = result
    });
  }
  delete(id) {
    this.customerListSrv.deleteCustomerItem(id)
  }
}
