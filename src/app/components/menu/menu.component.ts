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

@Component({
  selector: 'app-menu',
  standalone: true,
  providers: [],
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public lista_categorias: Array<any> = [];
  public selectedCategoria: string = '';

  constructor(private _categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this._categoriaService.lista_categorias().subscribe({
      next: (data) => {
        if (data && data.menuItems) {
          this.lista_categorias = data.menuItems.map(
            (item: any) => item.descripción
          );
        }
      },
      error: (error) => {
        console.error('Error obteniendo categorías', error);
      },
    });
  }

  @Output() categoriaSeleccionada = new EventEmitter<string>();

  SeleccionarCategoria(categoria: string) {
    if (this.selectedCategoria === categoria) {
      this.selectedCategoria = '';
      this.categoriaSeleccionada.emit('');
    } else {
      this.selectedCategoria = categoria;
      this.categoriaSeleccionada.emit(categoria);
    }
  }
}
