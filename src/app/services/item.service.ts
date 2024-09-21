import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { Iitem } from '../models/item.model';
import { IHydraCollection } from '../models/hydraCollection.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  httpClient = inject(HttpClient);
  private routeApi = `${environment.baseApiUrl}/items`;

  getAllItems(): Observable<Iitem[]> {
    return this.httpClient.get<IHydraCollection<Iitem>>(this.routeApi).pipe(
      map(response => response['hydra:member']),
    );
  }

  getAllItemsNoAssigned(): Observable<Iitem[]> {
    return this.httpClient.get<Iitem[]>(`${this.routeApi}${'/noassigned'}`);
  }

  getItemCommandesById(id: number): Observable<Iitem[]> {
    return this.httpClient.get<Iitem[]>(`${this.routeApi}${'/commande'}/${id}`);
  }

  getItemsEmployee(): Observable<Iitem[]> {
    return this.httpClient.get<Iitem[]>(`${this.routeApi}${'/employees'}`);
  }

  getItemById(id: number): Observable<Iitem> {
    return this.httpClient.get<Iitem>(`${this.routeApi}/${id}`);
  }

  postItem(body: Iitem): Observable<Iitem> {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });;
    return this.httpClient.post<Iitem>(this.routeApi, body);
  }

  patchItem(item: Iitem): Observable<Iitem> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });
    console.log('PATCH ITEM', item)
    console.log('PATCH JSON ITEM', JSON.stringify(item))
    return this.httpClient.patch<Iitem>(`${this.routeApi}/${item.id}`, JSON.stringify(item), { headers });
  }
  // patchItemStatus(item: Iitem): Observable<Iitem> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });
  //   console.log('PATCH ITEM', item)
  //   console.log('PATCH JSON ITEM', JSON.stringify(item))
  //   return this.httpClient.patch<Iitem>(`${this.routeApi}/${item.id}`, JSON.stringify(item.itemStatus), { headers });
  // }
  patchItemStatus(item: Iitem): Observable<Iitem> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });
    const patchPayload = { itemStatus: item.itemStatus };  // Crée un objet partiel contenant uniquement itemStatus

    console.log('PATCH ITEM', item);
    console.log('PATCH JSON ITEM', JSON.stringify(patchPayload));

    return this.httpClient.patch<Iitem>(`${this.routeApi}/${item.id}`, JSON.stringify(patchPayload), { headers }).pipe(
      catchError(error => {
        console.error('Error in patch request:', error);
        return throwError(error);
      })
    );
  }


  deleteItem(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

