import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { ICommande } from '../models/commande.model';


import { IClient } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  httpClient = inject(HttpClient);// Injection correcte du HttpClient
  private routeApi = `${environment.baseApiUrl}/commandes`; // Utiliser un slash à la fin pour les chemins

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
    const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    return this.httpClient.post<ICommande>(this.routeApi, body, { headers });
  }

  // Mettre à jour un Commande par ID
  patchCommande(id: string, body: ICommande): Observable<ICommande> {
    return this.httpClient.patch<ICommande>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Commande par ID
  deleteCommande(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }

  // formatDateTime(date: Date): string | null {
  //   return this.datePipe.transform(date, 'yyyy-MM-dd\'T\'HH:mm:ssZZZZZ'); // datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
  // }

  validCommande(commande: ICommande, client: IClient) {
    // let formattedDate = this.formatDateTime(new Date());
    //console.log(formattedDate); // Affiche la date au format PHP: '2024-08-13 10:45:00'
    console.log("validCommande")
    //console.log(client.user.id);

    // let commande: ICommande = {
    //   id: null,
    //   ref: '',
    //   client: '/api/clients/' + clientId,
    //   filingDate: this.formatDateTime(new Date()) ?? '',
    //   paymentDate: this.formatDateTime(new Date()) ?? '',
    //   returnDate: this.formatDateTime(new Date()) ?? ''
    // }
    //console.log(commande);
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

