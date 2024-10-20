import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public roles: Array<string> = [];

  httpClient = inject(HttpClient);
  private routeApi = `${environment.baseApiUrl}/users`;

  getAllUsers(): Observable<IUser> {
    return this.httpClient.get<IUser>(this.routeApi);
  }
  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.routeApi}/${id}`);
  }
  postUser(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.routeApi, user);
  }
  putUser(user: IUser | null): Observable<IUser> {
    return this.httpClient.put<IUser>(`${this.routeApi}/${user?.id}`, user);
  }
  deleteUser(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
  optionUser(id: string): Observable<void> {
    return this.httpClient.options<void>(`${this.routeApi}/${id}`);
  }
  public getUserRoles(): Array<string> {
    return this.roles;
  }

  public setUserRoles(roles: Array<string>): void {
    this.roles = roles;
  }

  getAuthCurrentUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${environment.baseApiUrl}/currentuser`);
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

}

