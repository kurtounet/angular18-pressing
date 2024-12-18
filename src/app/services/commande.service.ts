import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ICommande } from '../models/commande.model';
import { DatePipe } from '@angular/common';
import { IshoppingCartItem } from '../models/shoppingCartItem.model';
import { IposteCommande } from '../models/postCommande.model';
import { AuthService } from './auth.service';
import { IHydraCollection } from '../models/hydraCollection.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private routeApi = `${environment.baseApiUrl}/commandes`;
  httpClient = inject(HttpClient);
  serviceAuth = inject(AuthService);
  storageService = inject(StorageService);
  constructor(private datePipe: DatePipe) { }
  // Obtenir toutes les Commandes
  getAllCommandes(): Observable<ICommande[]> {
    return this.httpClient.get<IHydraCollection<ICommande>>(this.routeApi).pipe(
      map(response => {
        return response['hydra:member'];
      }),
    );
  }

  // Obtenir une commande par ID
  getCommandeById(id: string): Observable<ICommande> {
    return this.httpClient.get<ICommande>(`${this.routeApi}/${id}`);
  }

  // Créer une nouvelle commande
  postCommandeClient(body: IposteCommande): Observable<ICommande> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<ICommande>(`${this.routeApi}/client`, body, { headers });
  }

  // Mettre à jour une commande par ID
  patchCommande(id: string, body: ICommande): Observable<ICommande> {
    return this.httpClient.patch<ICommande>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer une commande
  deleteCommande(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }

  formatDateTime(date: Date): string | null {
    return this.datePipe.transform(date, 'yyyy-MM-dd\'T\'HH:mm:ssZZZZZ');
    // datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  }

  prepareCommande(arrayShoppingCartItem: IshoppingCartItem[]) {
    let clientId = this.storageService.getLocalStorageUser().id;
    let today = new Date();
    let commande: IposteCommande = {
      id: null,
      ref: '',
      client: '/api/clients/' + clientId,
      filingDate: this.formatDateTime(new Date()) ?? '',
      paymentDate: this.formatDateTime(new Date()) ?? '',
      returnDate: this.formatDateTime(new Date()) ?? '',
      items: arrayShoppingCartItem
    }
    return commande;
  }
}
