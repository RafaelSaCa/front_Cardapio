import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  if (token) {
    return true; // Permite acesso à rota
  }

  // Redireciona para login caso o token não esteja presente
  router.navigate(['/login']);
  return false;
};
