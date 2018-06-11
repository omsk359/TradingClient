import { Component } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import {ApiService} from "./api.service";
import {Store} from "@ngrx/store";
import {AppState} from "./reducers";
import {LogOut} from "./actions";
import {User} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TradingDemoApp';
  user: User;

  navLinks = [
    { path: '/profile', label: 'Profile' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/trading', label: 'Trading' },
  ];

  constructor(private router: Router, private api: ApiService, private store: Store<AppState>) {}

  ngOnInit() {
    this.api.auth$.subscribe(({user}) => this.user = user);
  }

  logout() {
    this.store.dispatch(new LogOut());
  }
}
