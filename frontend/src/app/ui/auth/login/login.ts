import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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

  constructor(private router: Router) {}

  /**
   * Cambia el estado de visibilidad de la contraseña
   */
  toggleMostrarContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  /**
   * Maneja el envío del formulario de login
   * @param form NgForm con las validaciones del template
   */
  onLogin(form: NgForm): void {
    if (form.valid) {
      console.log('✅ Usuario:', this.username);
      console.log('✅ Contraseña:', this.password);

      // Aquí puedes llamar a un servicio de autenticación si lo necesitas:
      // this.authService.login(this.username, this.password).subscribe(...)

      // Redirige a la lista
      this.router.navigate(['/lista']);
    } else {
      console.warn('⚠️ Formulario inválido');
      form.control.markAllAsTouched(); // Marca los campos para mostrar mensajes de error
    }
  }
}