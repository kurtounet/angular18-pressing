import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { Category, CategoryCollection } from '../models/category.model.';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private routeApi = `${environment.baseApiUrl}/categories`;
  constructor(private httpClient: HttpClient) { }
  // Obtenir tous les Categorys
  getAllCategories(): Observable<CategoryCollection> {
    return this.httpClient.get<CategoryCollection>(this.routeApi);
  }

  // Obtenir un Category par ID
  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.routeApi}/${id}`);
  }

  // Créer un nouveau Category
  postCategory(body: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.routeApi, body);
  }

  // Mettre à jour un Category par ID
  patchCategory(id: string, body: Category): Observable<Category> {
    return this.httpClient.patch<Category>(`${this.routeApi}/${id}`, body);
  }

  // Supprimer un Category par ID
  deleteCategory(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}/${id}`);
  }
}


