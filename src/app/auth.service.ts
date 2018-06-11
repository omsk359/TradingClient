import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import {AppState} from "./reducers";
import {Observable} from "rxjs/index";
import {Injectable} from "@angular/core";

export class User {
  id: string;
  email: string;
  password: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean;
  token: string;
  user: User;

  redirectUrl: string;

  constructor(private http: HttpClient, private store: Store<AppState>) {
    store.select('auth').subscribe(({ isAuthenticated, user }) => {
      this.isAuthenticated = isAuthenticated;
      this.token = user && user.token;
      this.user = user;
    });
  }

  logIn(email: string, password: string): Observable<User> {
    return this.http.post<User>('/login', {email, password});
  }

  signUp(email: string, password: string): Observable<User> {
    return this.http.post<User>('/sign-up', {email, password});
  }
}
