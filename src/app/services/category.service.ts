import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import {CategoryCollection} from '../models/category.model.';
import {Category} from '../interface/all.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpClient = inject(HttpClient);
  private routeApi = `${environment.baseApiUrl}/categories`;

  // Obtenir tous les Categorys
  public getAllCategories(): Observable<CategoryCollection> {
    return this.httpClient.get<CategoryCollection>(this.routeApi);
  }

  // Obtenir un Category par ID
  public getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Category
  public postCategory(body: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.routeApi, body);
  }

  // Mettre à jour un Category par ID
  public patchCategory(id: string, body: Category): Observable<Category> {
    return this.httpClient.patch<Category>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Category par ID
  public deleteCategory(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}


