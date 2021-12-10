import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './Components/blank/blank.component';
import { CustomerListComponent } from './Components/full/customer-list/customer-list.component';
import { FullComponent } from './Components/full/full.component';
import { HomeComponent } from './Components/full/home/home.component';
import { CustomerResolver } from './Resolvers/customer.resolver';
import { AuthGuard } from './Guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'customer-list', component: CustomerListComponent, canActivate: [AuthGuard], resolve: { customer: CustomerResolver } },
    ]
  },
  {
    path: '', component: BlankComponent, children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'login', loadChildren: () => import('src/app/Components/authenticate/authenticate.module').then(m => m.AuthenticateModule) },
    ]
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
