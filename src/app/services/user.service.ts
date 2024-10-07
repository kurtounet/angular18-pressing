import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
}

