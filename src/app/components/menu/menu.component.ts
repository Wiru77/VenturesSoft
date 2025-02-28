import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  lista_categorias: string[] = [
    'Featured',
    'Restaurants',
    'Travel',
    'Fuel',
    'Services',
    'Gifts & Entertainment',
    'Shopping',
    'Electronics',
    'Software',
    'Health & Beauty',
    'Office Supplies',
    'Automotive',
  ];

  selectedCategoria: string = '';

  @Output() categoriaSeleccionada = new EventEmitter<string>();

  SeleccionarCategoria(categoria: any) {
    this.selectedCategoria = categoria;
    this.categoriaSeleccionada.emit(categoria);
  }
}
