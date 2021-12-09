import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { CustomerListService } from 'src/app/Services/customer-list.service';
import { CustomerUpdateComponent } from '../customer-update/customer-update.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {


  constructor(
    private customerListSrv: CustomerListService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.customerListSrv.getCustomerList()

  }

  pageChanged(event) {
    console.log(event);
    this.customerListSrv.p = event;
    this.customerListSrv.getCustomerList()
  }
  openUpdateDialog(item) {
    // create dialog and send throw it data and update form and rescive updated data 
    //and get from data 
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      title: 'update customer data',
      data: item
    };

    let dialogRef = this.dialog.open(CustomerUpdateComponent, dialogConfig
    );
    dialogRef.componentInstance.onSave.subscribe(data => {
      console.log('#######', data);
    })

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
