

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');
  // const authReq = req.clone({
  //   headers: req.headers.set('Authorization', `Bearer ${token}`)
  // })
  // return next(authReq);

  let authReq = req.clone();
  if (token) {
    authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

  }
  return next(authReq);

};
