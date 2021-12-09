import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './Components/blank/blank.component';
import { CustomerListComponent } from './Components/full/customer-list/customer-list.component';
import { FullComponent } from './Components/full/full.component';
import { HomeComponent } from './Components/full/home/home.component';
import { AuthGuard } from './Guards/auth.guard';
import { GuestGuard } from './Guards/guest.guard';

const routes: Routes = [
  {
    path: '', component: FullComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'customer-list', component: CustomerListComponent, canActivate: [AuthGuard] },
    ]
  },
  {
    path: '', component: BlankComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'login', loadChildren: './Components/authenticate/authenticate.module#AuthenticateModule', canActivate: [GuestGuard] },
    ]
  },

  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
