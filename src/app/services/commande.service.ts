import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { ICommande } from '../models/commande.model';



@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private routeApi = `${environment.baseApiUrl}/commandes`; // Utiliser un slash à la fin pour les chemins

  httpClient = inject(HttpClient);// Injection correcte du HttpClient

  // Obtenir tous les Commandes
  getAllCommandes(): Observable<ICommande[]> {
    return this.httpClient.get<ICommande[]>(this.routeApi);
  }

  // Obtenir un Commande par ID
  getCommandeById(id: string): Observable<ICommande> {
    return this.httpClient.get<ICommande>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Commande
  postCommande(body: ICommande): Observable<ICommande> {
    return this.httpClient.post<ICommande>(this.routeApi, body);
  }

  // Mettre à jour un Commande par ID
  patchCommande(id: string, body: ICommande): Observable<ICommande> {
    return this.httpClient.patch<ICommande>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Commande par ID
  deleteCommande(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

