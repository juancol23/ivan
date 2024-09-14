import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-analyst',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './analyst.component.html',
  styleUrl: './analyst.component.css'
})
export class AnalystComponent {
  profile = localStorage.getItem('perfilUsuario');
}
