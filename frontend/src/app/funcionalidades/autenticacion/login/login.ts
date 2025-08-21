import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mostrarContrasena: boolean = false;

  toggleMostrarContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  constructor(private router: Router) {}

  onLogin(form: any) {
    if (form.valid) {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
      this.router.navigate(['/lista']);
    } else {
      console.warn('Formulario inválido');
    }
  }
}
