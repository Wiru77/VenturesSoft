import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TableComponent } from '../table/table.component';
import { MenuComponent } from '../menu/menu.component';
import { MarcaComponent } from '../marca/marca.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    TableComponent,
    MenuComponent,
    DetalleComponent,
    MarcaComponent,
    FooterComponent,
    TranslateModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  categoriaSeleccionada: string = '';

  actualizarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }
}
