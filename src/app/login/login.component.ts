import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../reducers";
import {LogIn, SignUp} from "../actions";
import {User} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  user = new User();

  ngOnInit() {
    this.user.email = 'chuck@koan.herokuapp.com';
  }

  login() {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

  signUp() {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new SignUp(payload));
  }
}
