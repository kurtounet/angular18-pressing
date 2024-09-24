import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError, Observable, throwError } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);
  const token = authService.getLocalStorageToken();
  // let contentType: string = "";
  // console.log(req.method);
  // // Vérifier quelle opération CRUD est en cours
  // switch (req.method) {
  //   case 'POST':
  //     contentType = "'Content-Type': 'application/json'";
  //     break;
  //   case 'PATCH':
  //     contentType = "'Content-Type': 'application/merge-patch + json'";
  //     break;
  // }

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,

      }
    });
  }
  //console.log(req);
  return next(req).pipe(
    catchError(error => {
      if (error.status === 401) {
        authService.logOut();
      }
      return throwError(error);
    })
  );
}

