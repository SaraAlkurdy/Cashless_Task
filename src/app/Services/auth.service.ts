import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  isAuthenticated: boolean = false;
  private authStatusListener = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
    private router: Router,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  public login(userInfo: User) {
    return this.http.post('https://reqres.in/api/login', userInfo).subscribe((response: any) => {
      console.log(response);

      const token = response.token; // token
      this.token = token;
      if (token) {
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        this.saveAuthData(token)
        this.router.navigate(['/home'])
      }
    }, (error: any) => {
      console.log(error);
      this._snackBar.open(error.error.error, null, { verticalPosition: 'top', horizontalPosition: 'right', panelClass: ['snackbar'] })


    })
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (authInformation) {

      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
    }

  }

  private getAuthData() {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }
    return {
      token: token
    }

  }

  public logout() {
    this.token = null;
    this.isAuthenticated = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  private saveAuthData(token: string) {
    localStorage.setItem('token', token);
  }
}

