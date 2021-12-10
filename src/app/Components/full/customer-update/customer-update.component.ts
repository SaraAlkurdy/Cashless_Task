import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerListService } from 'src/app/Services/customer-list.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  public customerForm: FormGroup;
  dialogResult: any;
  title: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CustomerUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerListSrv: CustomerListService,
  ) { }

  ngOnInit() {
    console.log(this.data.data);
    this.title = this.data.title;
    this.initCustomerForm()
    this.customerForm.patchValue(this.data.data)
  }

  initCustomerForm() {
    this.customerForm = this.fb.group({
      id: '',
      first_name: '',
      last_name: '',
      email: '',
      avatar: ''
    })
  }
  onUpdate(formValue) {
    this.customerListSrv.updateCustomerList(this.data.data.id, formValue).subscribe((response) => {
      console.log(response);
      this.dialogRef.close(response);

    }), err => {
      console.log(err);
    };

  }

}
