import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { ButtonStyleDirective } from './shared/button-style.directive';
import { HomeComponent } from './pages/HomeComponent/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, ButtonStyleDirective, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
