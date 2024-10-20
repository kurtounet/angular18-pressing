import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { ICommande } from '../models/commande.model';
import { DatePipe } from '@angular/common';

import { IClient } from '../models/client.model';
import { IshoppingCartItem } from '../models/shoppingCartItem.model';
import { IposteCommande } from '../models/postCommande.model';
import { AuthService } from './auth.service';
import { IHydraCollection } from '../models/hydraCollection.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private routeApi = `${environment.baseApiUrl}/commandes`; // Utiliser un slash à la fin pour les chemins
  httpClient = inject(HttpClient);
  serviceAuth = inject(AuthService);
  storageService = inject(StorageService);
  constructor(private datePipe: DatePipe) { }
  // Obtenir tous les Commandes
  getAllCommandes(): Observable<ICommande[]> {
    return this.httpClient.get<IHydraCollection<ICommande>>(this.routeApi).pipe(
      map(response => {
        return response['hydra:member'];
      }),
    );
  }

  // Obtenir un Commande par ID
  getCommandeById(id: string): Observable<ICommande> {
    return this.httpClient.get<ICommande>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Commande
  postCommandeClient(body: IposteCommande): Observable<ICommande> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<ICommande>(`${this.routeApi}/client`, body, { headers });
  }

  // Mettre à jour un Commande par ID
  patchCommande(id: string, body: ICommande): Observable<ICommande> {
    return this.httpClient.patch<ICommande>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Commande par ID
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

/*


addCommande() {
    let formattedDate = this.formatDateTime(new Date());
    //console.log(formattedDate); // Affiche la date au format PHP: '2024-08-13 10:45:00'
    let clientId = this.authService.getLocalStorageUser().id;
    console.log(clientId);

    let commande: ICommande = {
      id: null,
      ref: '',
      client: '/api/clients/' + clientId,
      filingDate: this.formatDateTime(new Date()) ?? '',
      paymentDate: this.formatDateTime(new Date()) ?? '',
      returnDate: this.formatDateTime(new Date()) ?? ''
    }
    console.log(commande);
    /*
    this.serviceCommande.postCommande(commande).subscribe(data => {
      console.log(data);
      if (data) {
        this.serviceShoppingCart.postShoppingCart(this.arrayItemsCart).subscribe(data => console.log(data)); //clearCart();
      }
    });

*/

