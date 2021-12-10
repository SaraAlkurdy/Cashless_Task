import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authServ: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['/login'])
  }

  logout() {
    this.authServ.logout()
  }

}
