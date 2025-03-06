import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-table-component',
  standalone: true,
  imports: [],
  templateUrl: './crud-table-component.component.html',
  styleUrl: './crud-table-component.component.css'
})
export class CrudTableComponentComponent {
  items = [
    {id:1, marca: 'Mazda', modelo: '3', total:5},
    {id:2, marca: 'Audi', modelo: 'A4', total:2},
    {id:3, marca: 'BMW', modelo: 'M5', total:3},
  ]
}
