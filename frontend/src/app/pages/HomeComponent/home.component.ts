import { Component } from '@angular/core';
import { ButtonStyleDirective } from '../../shared/button-style.directive';
import { CrudTableComponentComponent } from '../../shared/components/crud-table-component/crud-table-component.component';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonStyleDirective, CrudTableComponentComponent,RouterOutlet, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
