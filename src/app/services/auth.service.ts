import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';
import { environment } from '../environments/environment';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {

  }
  public roles: Array<string> = [];
  urlApiAuth: string = environment.baseApiUrl + "/login_check";

  public setLocalStorageToken(token: string): void {
    localStorage.setItem("token", token);
  }

  public getLocalStorageToken(): string | null {
    return localStorage.getItem("token");
  }

  public setLocalStorageUser(user: User): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getLocalStorageUser(): User | null {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  public getUserRoles(): Array<string> {
    return this.roles;
  }

  public setUserRoles(roles: Array<string>): void {
    this.roles = roles;
  }
  getAuthCurrentUser(): Observable<any> {
    return this.httpClient.get(`${environment.baseApiUrl}/currentuser`);
  }
  authentication(authRequest: AuthRequest): Observable<AuthResponse> {
    //console.log(this.apiAuth);
    return this.httpClient.post<AuthResponse>(this.urlApiAuth, authRequest);

  }
  logOut() {
    localStorage.removeItem('token');
    this.setUserRoles([]);
    this.router.navigate(["/login"]);
  }

  private handleLoginError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new ErrorEvent(error.error["message"]));
  }

}
