import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { ClientCollection, IClient } from '../models/client.model';
import { ICommande } from '../models/commande.model';
import { IUser } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  httpClient = inject(HttpClient);
  private routeApi = `${environment.baseApiUrl}/clients`; // Utiliser un slash à la fin pour les chemins

  // Obtenir tous les Clients
  getAllClients(): Observable<ClientCollection> {
    return this.httpClient.get<ClientCollection>(this.routeApi);
  }

  // Obtenir tous les Commandes du client
  getCommandesClient(): Observable<ICommande[]> {
    return this.httpClient.get<ICommande[]>(`${this.routeApi}/commandes`);
  }

  // Obtenir un Client par ID
  getClientById(id: number | undefined): Observable<IClient> {
    return this.httpClient.get<IClient>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Client
  postClient(user: IClient): Observable<IClient> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    return this.httpClient.post<IClient>(this.routeApi, user);
  }
  // patchUser(user: IUser | null): Observable<IUser> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });
  //   console.log(user)
  //   return this.httpClient.patch<IUser>(`${this.routeApi}/${user?.id}`, user, { headers });
  // }

  // Mettre à jour un Client
  patchClient(client: IClient | null): Observable<IClient> {
    console.log('SERVICE CLIENT', client)
    const headers = new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' });
    console.log(client?.Premium)
    return this.httpClient.patch<IClient>(`${this.routeApi}/${client?.user.id}`, client, { headers });
  }

  // Supprimer un Client
  deleteClient(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

