import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { IUser } from '../models/user.model';
import { IToken } from '../models/auth';
import { jwtDecode } from 'jwt-decode';
import { IClient } from '../models/client.model';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApiAuth: string = environment.authUrl;
  http = inject(HttpClient);
  userService = inject(UserService);
  StorageService = inject(StorageService);
  router = inject(Router);
  isLoggedIn: boolean = false;
  public roles: Array<string> = [];
  isLogged(): boolean {
    const token = this.StorageService.getLocalStorageToken();
    if (!token)
      return false;
    try {
      const decodedToken = jwtDecode<IToken>(token);
      this.userService.setUserRoles(decodedToken.roles);
      return decodedToken.exp > Date.now() / 1000;
    } catch (error) {
      return false;
    }
  }
  login(credentials: { username: string; password: string }): Observable<IToken> {
    return this.http.post<IToken>(`${this.urlApiAuth}`, credentials);
  }
  logOut() {
    localStorage.removeItem('token');
    this.userService.setUserRoles([]);
    this.router.navigate(["/login"]);
  }

  private handleLoginError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Une erreur s\'est produite:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new ErrorEvent(error.error["message"]));
  }

}
