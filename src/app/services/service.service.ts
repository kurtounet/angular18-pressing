import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { IService } from '../models/service.model';
import { IHydraCollection } from '../models/hydraCollection.model';
import { catchError, map, Observable, retry, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private routeApi = `${environment.baseApiUrl}/services`;
httpClient = inject(HttpClient);

  // Obtenir tous les services
  getAllServices(): Observable<IService[]> {
    return this.httpClient.get<IHydraCollection<IService>>(this.routeApi).pipe(
      map(response => response['hydra:member']),
    );
  }

  // fetchAll(): Observable<IService[]> {
  //   return this.http.get<HydraCollection<IService>>(this.urlService + '/services').pipe(
  //     map(response=> response['hydra:member'])
  //   );

  // Obtenir un service par ID
  getServiceById(id: number): Observable<IService> {
    return this.httpClient.get<IService>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau service
  postService(body: IService): Observable<IService> {
    return this.httpClient.post<IService>(this.routeApi, body);
  }

  // Mettre à jour un service par ID
  patchService(id: string, body: IService): Observable<IService> {
    return this.httpClient.patch<IService>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un service par ID
  deleteService(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }

  errorHandler(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code ${error.status}\nMessage : ${error.message}`
    }
    window.alert(errorMessage)
    // return throwError(errorMessage)
  }
}
