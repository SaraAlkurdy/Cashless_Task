import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cashless-plus';
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
    console.log(this.router.url);

    this.auth.autoAuthUser();
  }

}
