import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: ServicesService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login caso não esteja autenticado
      return false;
    }
  }
}
