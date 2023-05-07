import { LoginService } from './components/login/login.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.isLoggedIn()) {
    return true;
  }

  return router.navigate(['login']);
};
