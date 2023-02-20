import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUserLogin} from "../../models/IUserLogin";
import {Observable, tap} from "rxjs";
import {IUserRegister} from "../../models/IUserRegister";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  //Unfortunately, environments.ts file doesn't seem to work, so I had to wrote API strings.

  register(user: IUserRegister): Observable<IUserRegister>{
    return this.httpClient.post<IUserRegister>('https://localhost:7291/api/Auth/register', user)
  }

  login(user: IUserLogin): Observable<{token: string}>{
    return this.httpClient.post<{token: string}>('https://localhost:7291/api/Auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('token', token);
          }
        )
      );
  }

}
