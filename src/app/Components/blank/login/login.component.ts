import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    public authServ: AuthService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login() {
    this.isSubmitted = true;
    let data = this.loginForm.value;
    console.log(data);

    this.authServ.login(data)
  }


}
