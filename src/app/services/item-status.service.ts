import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { ItemStatus, ItemStatusCollection } from '../models/itemStatus.model';



@Injectable({
  providedIn: 'root'
})
export class ItemStatusService {

  private routeApi = `${environment.baseApiUrl}ItemStatus/`; // Utiliser un slash à la fin pour les chemins

  constructor(private httpClient: HttpClient) { } // Injection correcte du HttpClient

  // Obtenir tous les ItemStatuss
  getAllItemStatuss(): Observable<ItemStatusCollection> {
    return this.httpClient.get<ItemStatusCollection>(this.routeApi);
  }

  // Obtenir un ItemStatus par ID
  getItemStatusById(id: string): Observable<ItemStatus> {
    return this.httpClient.get<ItemStatus>(`${this.routeApi}${id}`);
  }

  // Créer un nouveau ItemStatus
  postItemStatus(body: ItemStatus): Observable<ItemStatus> {
    return this.httpClient.post<ItemStatus>(this.routeApi, body);
  }

  // Mettre à jour un ItemStatus par ID
  patchItemStatus(id: string, body: ItemStatus): Observable<ItemStatus> {
    return this.httpClient.patch<ItemStatus>(`${this.routeApi}${id}`, body);
  }

  // Supprimer un ItemStatus par ID
  deleteItemStatus(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}${id}`);
  }
}
