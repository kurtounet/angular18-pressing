import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { ICategory, CategoryCollection } from '../models/category.model.';
import { IHydraCollection } from '../models/hydraCollection.model';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  arrayCategory: ICategory[] = [];
  httpClient = inject(HttpClient);

  private routeApi = `${environment.baseApiUrl}/categories`;
  //*********************functions*******************//
  getNameCategory(id: number): string {
    return this.arrayCategory.find(c => c.id === id)?.name || '';
  }

  //******************CRUD********************************//

  // Obtenir tous les Category
  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<IHydraCollection<ICategory>>(this.routeApi).pipe(
      map(response => response['hydra:member']),
    );

  }
  // Obtenir un Category par ID
  public getCategoryById(id: string): Observable<ICategory> {
    return this.httpClient.get<ICategory>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Category
  public postCategory(body: ICategory): Observable<ICategory> {
    return this.httpClient.post<ICategory>(this.routeApi, body);
  }

  // Mettre à jour un Category par ID
  public patchCategory(id: string, body: ICategory): Observable<ICategory> {
    return this.httpClient.patch<ICategory>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Category par ID
  public deleteCategory(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}


