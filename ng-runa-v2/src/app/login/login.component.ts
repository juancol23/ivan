import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor() {}

  ngOnInit(): void {}

  startttt() {
    const url = 'https://runainstancia.azurewebsites.net/user';
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error al obtener los datos del usuario.');
      })
      .then(data => {
        const usuarios = data.map((item: any) => ({
          email: item.email,
          perfil: item.perfil,
          contraseña: item.contraseña,
        }));

        const usuarioEncontrado = usuarios.find(
          (usuario: any) =>
            usuario.email === this.email && usuario.contraseña === this.password
        );

        if (usuarioEncontrado) {
          localStorage.setItem('perfilUsuario', usuarioEncontrado.perfil);
          localStorage.setItem('nombreUsuario', this.email);

          if (usuarioEncontrado.perfil === 'admin') {
            window.location.href = 'dashboad.html';
          } else if (usuarioEncontrado.perfil === 'analista') {
            window.location.href = 'b.html';
          } else if (usuarioEncontrado.perfil === 'backoffice') {
            window.location.href = 'backoffice.html';
          }
        } else {
          alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
      })
      .catch(error => console.error(error));
  }

}
  