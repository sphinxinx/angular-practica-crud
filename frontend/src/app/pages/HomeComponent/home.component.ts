import { Component } from '@angular/core';
import { ButtonStyleDirective } from '../../shared/button-style.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonStyleDirective, CrudTableComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
