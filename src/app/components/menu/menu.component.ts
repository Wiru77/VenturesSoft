import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  importProvidersFrom,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CategoriaService } from '../../services/categoria.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  providers: [],
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  /*lista_categorias: string[] = [
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
  ];*/

  public lista_categorias: Array<any> = [];

  constructor(private _categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this._categoriaService.lista_categorias().subscribe(
      (response) => {
        this.lista_categorias = response.data;
        console.log(this.lista_categorias);
      },
      (error) => {}
    );
  }

  selectedCategoria: string = '';

  @Output() categoriaSeleccionada = new EventEmitter<string>();

  SeleccionarCategoria(categoria: any) {
    this.selectedCategoria = categoria;
    this.categoriaSeleccionada.emit(categoria);
  }
}
