import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = false;
  private role: 'Administrador' | 'Usuario' | null = null;

  login(username: string, password: string): boolean {
    // Implementar lógica real de login
    this.loggedIn = true;
    this.role = 'Usuario';
    return true;
  }

  logout(): void {
    this.loggedIn = false;
    this.role = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): 'Administrador' | 'Usuario' | null {
    return this.role;
  }

  constructor(private router: Router) {}
}
