import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { IUser, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private routeApi = `${environment.baseApiUrl}/users`;

  httpClient = inject(HttpClient);

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.routeApi);
  }

  getUserById(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.routeApi}/${id}`);
  }

  postUser(body: User): Observable<IUser> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    console.log('POST',body);
    return this.httpClient.post<IUser>(this.routeApi, body, { headers });
  }

  patchUser(id: number | undefined, body: IUser | null): Observable<IUser> {
    const headers = new HttpHeaders(
      { 'Content-Type': 'application/merge-patch+json', 
        'Accept': 'application/ld+json' }
      );
    console.log('PATCH',body);
    return this.httpClient.patch<IUser>(`${this.routeApi}/${id}`, body, {headers});
  }

  deleteUser(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

