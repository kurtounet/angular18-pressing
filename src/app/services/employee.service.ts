import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Corriger le nom du chemin si nécessaire
import { Employee, EmployeeCollection } from '../models/employee.model';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private routeApi = `${environment.baseApiUrl}Employee/`; // Utiliser un slash à la fin pour les chemins

 httpClient = inject(HttpClient);// Injection correcte du HttpClient

  // Obtenir tous les Employees
  getAllEmployees(): Observable<EmployeeCollection> {
    return this.httpClient.get<EmployeeCollection>(this.routeApi);
  }

  // Obtenir un Employee par ID
  getEmployeeById(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.routeApi}${id}`);
  }

  // Créer un nouveau Employee
  postEmployee(body: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.routeApi, body);
  }

  // Mettre à jour un Employee par ID
  patchEmployee(id: string, body: Employee): Observable<Employee> {
    return this.httpClient.patch<Employee>(`${this.routeApi}${id}`, body);
  }

  // Supprimer un Employee par ID
  deleteEmployee(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.routeApi}${id}`);
  }
}
