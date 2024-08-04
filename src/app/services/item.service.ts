import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Iitem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private routeApi = `${environment.baseApiUrl}/items`;

  httpClient = inject(HttpClient);

  getAllItems(): Observable<Iitem[]> {
    return this.httpClient.get<Iitem[]>(this.routeApi);
  }

  getItemById(id: number): Observable<Iitem> {
    return this.httpClient.get<Iitem>(`${this.routeApi}/${id}`);
  }

  postItem(body: Iitem): Observable<Iitem> {
    return this.httpClient.post<Iitem>(this.routeApi, body);
  }

  patchItem(id: number, body: Iitem): Observable<Iitem> {
    return this.httpClient.patch<Iitem>(`${this.routeApi}/${id}`, body);
  }

  deleteItem(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

