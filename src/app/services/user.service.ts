import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { IUser, User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private routeApi = `${environment.baseApiUrl}/users`;

 httpClient = inject(HttpClient);

  getAllUsers(): Observable<any> {
    return this.httpClient.get<any>(this.routeApi);
  }

  getUserById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.routeApi}/${id}`);
  }

  postUser(body: User): Observable<User> {
    return this.httpClient.post<User>(this.routeApi, body);
  }



  patchUser(id: string, body: User): Observable<User> {
    return this.httpClient.patch<User>(`${this.routeApi}/${id}`, body);
  }

  deleteUser(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

