import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private userService: UserService) { }

  logOut = (): void => {
    localStorage.clear();
    sessionStorage.clear();
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(error => { console.log(error) });
  };
}
