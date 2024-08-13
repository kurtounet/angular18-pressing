
import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from '../../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLogged()) {    
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};

// export const adminGuard: CanActivateFn =
//   (route, state) => {
//     // Injecter le router
//     const router: Router = inject(Router);
//     // récuperer le token
//     let token = window.localStorage.getItem("token");
//     // si le token est vide
//     if (!token) {
//       // rediriger vers le login
//       router.navigate(["login"]);
//       return false
//     }
//     return true;
//   };
