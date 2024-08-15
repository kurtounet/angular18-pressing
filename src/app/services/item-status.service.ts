import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { IitemStatus, ItemStatusCollection } from '../models/itemStatus.model';
import { IHydraCollection } from '../models/hydraCollection.model';



@Injectable({
  providedIn: 'root'
})
export class ItemStatusService {

  private routeApi = `${environment.baseApiUrl}/item_statuses`; // Utiliser un slash à la fin pour les chemins

  httpClient = inject(HttpClient);

  // Obtenir tous les ItemStatus
  getAllItemStatus(): Observable<IitemStatus[]> {
    return this.httpClient.get<IHydraCollection<IitemStatus>>(this.routeApi).pipe(
      map(response => response['hydra:member']),

    );
  }

  // Obtenir un ItemStatus par ID
  getItemStatusById(id: string): Observable<IitemStatus> {
    return this.httpClient.get<IitemStatus>(`${this.routeApi}${id}`);
  }

  // Créer un nouveau ItemStatus
  postItemStatus(body: IitemStatus): Observable<IitemStatus> {
    return this.httpClient.post<IitemStatus>(this.routeApi, body);
  }

  // Mettre à jour un ItemStatus par ID
  patchItemStatus(id: string, body: IitemStatus): Observable<IitemStatus> {
    return this.httpClient.patch<IitemStatus>(`${this.routeApi}${id}`, body);
  }

  // Supprimer un ItemStatus par ID
  deleteItemStatus(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}${id}`);
  }
}
