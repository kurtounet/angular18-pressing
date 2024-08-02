import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; 
import { Item, ItemCollection } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private routeApi = `${environment.baseApiUrl}Items/`;

 httpClient = inject(HttpClient);

  getAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.routeApi);
  }

  getItemById(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.routeApi}${id}`);
  }

  postItem(body: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.routeApi, body);
  }

  patchItem(id: string, body: Item): Observable<Item> {
    return this.httpClient.patch<Item>(`${this.routeApi}${id}`, body);
  }

  deleteItem(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}${id}`);
  }
}

