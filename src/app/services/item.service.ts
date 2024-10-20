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
  getAmount(items: any): Observable<any> {

    return this.httpClient.post<any>(`${this.routeApi}${'/amount'}`, items);
  }
  postItem(body: Iitem): Observable<Iitem> {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });;
    return this.httpClient.post<Iitem>(this.routeApi, body);
  }

  patchItemStatus(item: Iitem): Observable<Iitem> {
    //const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });



    const patchPayload = {
      "itemStatus": item.itemStatus?.['@id']
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });
   
    return this.httpClient.patch<Iitem>(`${this.routeApi}/${item.id}`, patchPayload, { headers });
  }
  putItemStatus(item: Iitem): Observable<Iitem> {
    const patchPayload =
    {
      "service": `/api/services/${item.service?.id}`,
      "commande": `/api/commandes/${item.commande?.id}`,
      "itemStatus": `/api/item_statuses/${item.itemStatus?.id}`,
      "detailItem": item.detailItem,
      "price": item.price,
      "quantity": item.quantity,
      "employee": item.employee,
      //"category": `/api/categories/${item.category?.id}`
    };
    return this.httpClient.put<Iitem>(`${this.routeApi}/${item.id}`, patchPayload).pipe(
      catchError(error => {
        console.error('Error in put request:', error);
        return throwError(error);
      })
    );
  }


  deleteItem(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

