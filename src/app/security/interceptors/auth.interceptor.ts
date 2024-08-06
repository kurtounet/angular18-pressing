

import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError, Observable, throwError } from 'rxjs';

export function authInterceptor (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);
  const token = authService.getLocalStorageToken();
 
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
       // 'Content-Type': 'application/ld+json'
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

// export const authInterceptor: HttpInterceptorFn = (req, next) => {

//   const token = localStorage.getItem('token');
//   // const authReq = req.clone({
//   //   headers: req.headers.set('Authorization', `Bearer ${token}`)
//   // })
//   // return next(authReq);

//   let authReq = req.clone();
//   if (token) {
//     authReq = req.clone({
//       setHeaders: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//   }
//   return next(authReq);

// };
