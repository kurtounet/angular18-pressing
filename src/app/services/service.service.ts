import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { Service, ServiceCollection } from '../models/service.model';
import { catchError, Observable, retry, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private routeApi = `${environment.baseApiUrl}/services`;
httpClient = inject(HttpClient);

  // Obtenir tous les services
  getAllServices(): Observable<any> {
    return this.httpClient.get<any>(this.routeApi);
  }

  // Obtenir un service par ID
  getServiceById(id: string): Observable<Service> {
    return this.httpClient.get<Service>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau service
  postService(body: Service): Observable<Service> {
    return this.httpClient.post<Service>(this.routeApi, body);
  }

  // Mettre à jour un service par ID
  patchService(id: string, body: Service): Observable<Service> {
    return this.httpClient.patch<Service>(`${this.routeApi}/${id}`, body);
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
