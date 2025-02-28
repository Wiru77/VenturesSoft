import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent {
  @Input() categoriaSeleccionada: string = '';

  lista_marcas = [
    {
      nombre_marca: 'Chevron',
      imagen_marca: 'assets/img/chevron.jpg',
      promo_marca: '2% cashback on all Chevron fuel purchases',
      nombre_categoria: 'Fuel',
    },
    {
      nombre_marca: 'MGM Grand',
      imagen_marca: 'assets/img/mgm.webp',
      promo_marca: '5% cashback',
      nombre_categoria: 'Featured',
    },
    {
      nombre_marca: 'Panera Bread',
      imagen_marca: 'assets/img/panera.webp',
      promo_marca: '2% cashback on purchases of $35 or more',
      nombre_categoria: 'Restaurants',
    },
    {
      nombre_marca: 'Mailchimp',
      imagen_marca: 'assets/img/mailchimp.jpg',
      promo_marca: '5% cashback on purchases at Mailchimp',
      nombre_categoria: 'Services',
    },
  ];

  get marcasFiltradas() {
    return this.lista_marcas.filter(
      (marca) =>
        this.categoriaSeleccionada === '' ||
        marca.nombre_categoria === this.categoriaSeleccionada
    );
  }
}
