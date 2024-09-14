import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  formLogin: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  startttt = (form: FormGroup): void => {

    // Obtener los valores del correo y la contraseña
    var email: string = form.controls['email'].value;
    var password: string = form.controls['password'].value;

    var url = 'https://runainstancia.azurewebsites.net/user';
    var usuariosM; // Declaramos la variable usuariosM aquí.

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error al obtener los datos del usuario.');
      })
      .then(data => {
        // Los datos del usuario se encuentran en la variable 'data'.
        console.log(data);

        // Mapear los datos remotos al modelo de usuario
        var usuarios = data.map((item: { email: string, perfil: string, contraseña: string }) => ({
          email: item.email,
          perfil: item.perfil,
          contraseña: item.contraseña
        }));

        // Ahora 'usuarios' contiene los datos en el formato deseado.
        console.log(usuarios);

        // Asignamos el valor de 'usuarios' a 'usuariosM'.
        usuariosM = usuarios;


        var pass_ = "";
        var email_ = "";
        // Verificar si el usuario existe
        var usuarioEncontrado = usuariosM.find(function (usuario: { contraseña: string; email: string; }) {
          pass_ = usuario.contraseña;
          email_ = email;
          console.log("anal:" + usuario.email === email && usuario.contraseña === password)
          return usuario.email === email && usuario.contraseña === password;
        });

        if (usuarioEncontrado) {
          // Guardar el perfil del usuario en localStorage
          localStorage.setItem('perfilUsuario', usuarioEncontrado.perfil);
          localStorage.setItem('nombreUsuario', email_);
          localStorage.setItem('nombreContraseña', pass_);

          // Redireccionar a la página correspondiente
          if (usuarioEncontrado.perfil === 'admin') {
            this.router.navigate(['/dashboard']);
          } else if (usuarioEncontrado.perfil === 'analista') {
            this.router.navigate(['/analyst']);
          } else if (usuarioEncontrado.perfil === 'backoffice') {
            this.router.navigate(['/backoffice']);
          }

        } else {
          alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }


        // Puedes realizar las operaciones necesarias con los datos mapeados.
      })
      .catch(error => {
        console.error(error);
      });

    // // Definir los usuarios y sus perfiles
    // var usuarios = [
    //     { email: 'ivan.quiroz@runa-it.com', perfil: 'admin', contraseña: '123456' },
    //     { email: 'lesly.huaman@runa-it.com', perfil: 'analista', contraseña: '123456' },
    //     { email: 'abel.pineda@runa-it.com', perfil: 'analista', contraseña: '123456' }
    // ];

  };

}
