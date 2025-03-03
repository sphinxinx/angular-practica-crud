import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonStyleDirective } from './shared/button-style.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonStyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  
}
