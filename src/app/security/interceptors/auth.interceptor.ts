import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError, Observable, throwError } from 'rxjs';
import { StorageService } from '../../services/storage.service';


export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);
  const storageService = inject(StorageService);
  const token = storageService.getLocalStorageToken();
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
  }
  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        authService.logOut();
      }
      return throwError(error);
    })
  );
}

