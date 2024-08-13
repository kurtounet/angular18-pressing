import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { ClientCollection, IClient } from '../models/client.model';
import { ICommande } from '../models/commande.model';




@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private routeApi = `${environment.baseApiUrl}/clients`; // Utiliser un slash à la fin pour les chemins

  httpClient = inject(HttpClient);
  // Obtenir tous les Clients
  getAllClients(): Observable<ClientCollection> {
    return this.httpClient.get<ClientCollection>(this.routeApi);
  }
  getClientCommandesById(id: number): Observable<ICommande[]> {
    return this.httpClient.get<ICommande[]>(this.routeApi);
  }

  // Obtenir un Client par ID
  getClientById(id: number | undefined): Observable<IClient> {
    return this.httpClient.get<IClient>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Client
  postClient(body: IClient): Observable<IClient> {
   // const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    return this.httpClient.post<IClient>(this.routeApi, body);
  }

  // Mettre à jour un Client par ID
  patchClient(id: string, body: IClient): Observable<IClient> {
    return this.httpClient.patch<IClient>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Client par ID
  deleteClient(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

