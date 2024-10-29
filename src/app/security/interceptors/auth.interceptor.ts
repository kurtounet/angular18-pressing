import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError, Observable, throwError } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';


export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn):
 Observable<HttpEvent<unknown>> {
  // Injection des services
  const authService = inject(AuthService);
  const router = inject(Router);
  const storageService = inject(StorageService);

  // Récuperation du token dans le localStorage
  const token = storageService.getLocalStorageToken();
  if (token) {
    // Ajout du token dans le header
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
  }
  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        // Déconnexion automatique et redirection vers la page de connexion.
        authService.logOut();
        router.navigate(['/login']);
      }
      return throwError(error);
    })
  );
}

