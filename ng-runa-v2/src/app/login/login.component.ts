import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private router: Router, private userService: UserService) { 
    this.formLogin = new FormGroup({
      email:    new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit = () : void => {
    
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        // localStorage.setItem('perfilUsuario', );
        localStorage.setItem('nombreUsuario', this.formLogin.value.email);
        localStorage.setItem('nombreContraseña', this.formLogin.value.password);
        this.router.navigate(['/analyst']);
      })
      .catch(error => {
        console.log(error);
      })
  } 
 
  /*
  startttt = (form: FormGroup): void => {

    // Obtener los valores del correo y la contraseña
    var email:    string = this.formLogin.value.email;
    var password: string = this.formLogin.value.password;

    console.log({ email, password })
    var usuariosM

    var url = 'https://runainstancia.azurewebsites.net/user';

    fetch(url, { mode: 'no-cors' })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error al obtener los datos del usuario.');
      })
      .then(data => {

        // Mapear los datos remotos al modelo de usuario
        var usuarios = data.map((item: { email: string, perfil: string, contraseña: string }) => ({
          email:      item.email,
          perfil:     item.perfil,
          contraseña: item.contraseña
        }));

        console.log(usuarios)

        usuariosM = usuarios 

        console.log(usuarios)

        var pass_  : string = "";
        var email_ : string = "";
        // Verificar si el usuario existe
        var usuarioEncontrado = usuariosM.find(function (usuario: { email: string, perfil: string, contraseña: string }) {
          email_ = usuario.email;
          pass_  = usuario.contraseña;
          console.log(usuario.email === email && usuario.contraseña === password)
          return usuario.email === email && usuario.contraseña === password;
        });

        if (usuarioEncontrado) {
          // Guardar el perfil del usuario en localStorage
          localStorage.setItem('perfilUsuario', usuarioEncontrado.perfil);
          localStorage.setItem('nombreUsuario', email_);
          localStorage.setItem('nombreContraseña', pass_);

          var pruebita = this.userService.loginAnonymous();
          console.log(pruebita)

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
  */

}
