import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './pages/login/login.service';

export const authGuard = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn()) {
    return true;
  }

  return router.navigate(['login']);
};
