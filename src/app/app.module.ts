import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/full/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { HeaderComponent } from './Components/full/header/header.component';
import { CustomerListComponent } from './Components/full/customer-list/customer-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FullComponent } from './Components/full/full.component';
import { BlankComponent } from './Components/blank/blank.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomerUpdateComponent } from './Components/full/customer-update/customer-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticateModule } from './Components/authenticate/authenticate.module';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    HeaderComponent,
    CustomerListComponent,
    FullComponent,
    BlankComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    NgxPaginationModule,
    MatSnackBarModule,
    NgbModule,
    AuthenticateModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
  entryComponents: [CustomerUpdateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
