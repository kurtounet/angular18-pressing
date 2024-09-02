import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {environment} from '../environments/environment';
import {IUser} from '../models/user.model';
import {IToken} from '../models/auth';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApiAuth: string = environment.authUrl;

  http = inject(HttpClient);
  router = inject(Router);
  isLoggedIn: boolean = false;


  public roles: Array<string> = [];

  public setLocalStorageToken(token: string): void {
    localStorage.setItem("token", token);
  }

  public getLocalStorageToken(): string | null {
    return localStorage.getItem("token");
  }

  //  getToken(): string | null {
  //   return localStorage.getItem('token');
  // }

  public setLocalStorageUser(user: IUser): void {
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getLocalStorageUser(): IUser {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }


  public getUserRoles(): Array<string> {
    return this.roles;
  }

  public setUserRoles(roles: Array<string>): void {
    this.roles = roles;
  }

  getAuthCurrentUser(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.baseApiUrl}/currentuser`);
  }

  isLogged(): boolean {
    const token = this.getLocalStorageToken();
    if (!token) return false;
    try {
      const decodedToken = jwtDecode<IToken>(token);
      this.setUserRoles(decodedToken.roles);
      return decodedToken.exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  }


  //  authentication(authRequest: AuthRequest): Observable<AuthResponse> {
  //     return this.http.post<AuthResponse>(this.urlApiAuth, authRequest);
  //   }
  login(credentials: { username: string; password: string }): Observable<IToken> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<IToken>(`${this.urlApiAuth}`, credentials, {headers});
  }

  logOut() {
    localStorage.removeItem('token');
    this.setUserRoles([]);
    this.router.navigate(["/login"]);
  }

  /*
logout(): void {
  localStorage.removeItem('token');
  this.router.navigate(['login']);
}
*/

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
