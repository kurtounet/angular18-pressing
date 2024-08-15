import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Iitem } from '../models/item.model';
import { IHydraCollection } from '../models/hydraCollection.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private routeApi = `${environment.baseApiUrl}/items`;

  httpClient = inject(HttpClient);

  getAllItems(): Observable<Iitem[]> {
    return this.httpClient.get<IHydraCollection<Iitem>>(this.routeApi).pipe(
      map(response => response['hydra:member']),
    );
  }
  getAllItemsNoAssigned(): Observable<Iitem[]> {
    return this.httpClient.get<Iitem[]>(`${this.routeApi}${'/noassigned'}`)
  }

  getItemCommandesById(id: number): Observable<Iitem[]> {
    return this.httpClient.get<IHydraCollection<Iitem>>(this.routeApi).pipe(
      map(response => response['hydra:member']),
    );
  }
  getItemsEmployee(): Observable<Iitem[]> {
    return this.httpClient.get<Iitem[]>(`${this.routeApi}${'/employees'}`)
  }

  getItemById(id: number): Observable<Iitem> {
    return this.httpClient.get<Iitem>(`${this.routeApi}/${id}`);
  }

  postItem(body: Iitem): Observable<Iitem> {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });;
    return this.httpClient.post<Iitem>(this.routeApi, body);
  }

  patchItem(id: number | null, body: Iitem): Observable<Iitem> {
    return this.httpClient.patch<Iitem>(`${this.routeApi}/${id}`, body);
  }

  deleteItem(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

