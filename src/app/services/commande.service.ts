import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { Commande, CommandeCollection } from '../models/commande.model';



@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private routeApi = `${environment.baseApiUrl}/commandes`; // Utiliser un slash à la fin pour les chemins

  constructor(private httpClient: HttpClient) { } // Injection correcte du HttpClient

  // Obtenir tous les Commandes
  getAllCommandes(): Observable<any> {
    return this.httpClient.get<any>(this.routeApi);
  }

  // Obtenir un Commande par ID
  getCommandeById(id: string): Observable<Commande> {
    return this.httpClient.get<Commande>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Commande
  postCommande(body: Commande): Observable<Commande> {
    return this.httpClient.post<Commande>(this.routeApi, body);
  }

  // Mettre à jour un Commande par ID
  patchCommande(id: string, body: Commande): Observable<Commande> {
    return this.httpClient.patch<Commande>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Commande par ID
  deleteCommande(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}

