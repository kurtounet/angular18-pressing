import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { IUser } from '../models/user.model';
import { IToken } from '../models/auth';
import { jwtDecode } from 'jwt-decode';
import { IClient } from '../models/client.model';

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
  public isMajor(dateborn: Date): boolean {

    const age = new Date().getFullYear() - new Date(dateborn).getFullYear();
    if (age >= 18) {
      return true;
    }
    return false;
  }
  public validcoordanateClient(): boolean {
    const storedUser = localStorage.getItem("user");
    // Vérifie si l'utilisateur est stocké dans le localStorage
    if (storedUser) {
      const user: IUser = JSON.parse(storedUser);
      // Vérifie si l'utilisateur est majeur
      if (this.isMajor(user.dateborn)) {

        // Vérifie si les coordonnées remplis
        if (
          user.firstname && user.lastname &&
          user.dateborn && user.numadrs && user.adrs && user.city &&
          user.zipcode && user.country
        ) {
          return true; // Toutes les informations sont valides
        }
      }
    }
    return false;
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



  login(credentials: { username: string; password: string }): Observable<IToken> {
    return this.http.post<IToken>(`${this.urlApiAuth}`, credentials);
  }

  logOut() {
    localStorage.removeItem('token');
    this.setUserRoles([]);
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
