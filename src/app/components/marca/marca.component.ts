import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
})
export class MarcaComponent {
  lista_marcas = [
    {
      nombre_marca: 'National',
      imagen_marca: 'assets/img/national.jpg',
      promo_marca: 'Save 5% on car rentals',
      nombre_categoria: 'Travel',
    },
    {
      nombre_marca: 'Google Ads',
      imagen_marca: 'assets/img/google.webp',
      promo_marca: 'Get $500 in Google ad spend',
      nombre_categoria: 'Services',
    },
    {
      nombre_marca: 'TikTok for Business',
      imagen_marca: 'assets/img/tiktok.png',
      promo_marca: 'Spend $200, Get $200',
      nombre_categoria: 'Advertising',
    },
    {
      nombre_marca: 'Shutterstock',
      imagen_marca: 'assets/img/shutter.webp',
      promo_marca: 'Save 20% Sitewide',
      nombre_categoria: 'Office Supplies',
    },
    {
      nombre_marca: 'Meta',
      imagen_marca: 'assets/img/meta.png',
      promo_marca: 'Up to 25% off',
      nombre_categoria: 'Gifts & Entertainment',
    },
    {
      nombre_marca: 'McAfee',
      imagen_marca: 'assets/img/mcafee.webp',
      promo_marca: 'Save on McAfee Security for VISA',
      nombre_categoria: 'Software',
    },
    {
      nombre_marca: 'Dropbox',
      imagen_marca: 'assets/img/Dropbox.jpg',
      promo_marca: 'Get 40% off Dropbox Standard or Advanced',
      nombre_categoria: 'Software',
    },
    {
      nombre_marca: 'Yahoo!',
      imagen_marca: 'assets/img/yahoo.jpg',
      promo_marca: 'Save 50% with System Mechanic',
      nombre_categoria: 'Services',
    },
    {
      nombre_marca: 'National',
      imagen_marca: 'assets/img/national.jpg',
      promo_marca: 'Save 5% on car rentals',
      nombre_categoria: 'Travel',
    },
    {
      nombre_marca: 'Google Ads',
      imagen_marca: 'assets/img/google.webp',
      promo_marca: 'Get $500 in Google ad spend',
      nombre_categoria: 'Services',
    },
    {
      nombre_marca: 'TikTok for Business',
      imagen_marca: 'assets/img/tiktok.png',
      promo_marca: 'Spend $200, Get $200',
      nombre_categoria: 'Electronics',
    },
    {
      nombre_marca: 'Shutterstock',
      imagen_marca: 'assets/img/shutter.webp',
      promo_marca: 'Save 20% Sitewide',
      nombre_categoria: 'Software',
    },
    {
      nombre_marca: 'Meta',
      imagen_marca: 'assets/img/meta.png',
      promo_marca: 'Up to 25% off',
      nombre_categoria: 'Software',
    },
    {
      nombre_marca: 'McAfee',
      imagen_marca: 'assets/img/mcafee.webp',
      promo_marca: 'Save on McAfee Security for VISA',
      nombre_categoria: 'Shooping',
    },
    {
      nombre_marca: 'Dropbox',
      imagen_marca: 'assets/img/Dropbox.jpg',
      promo_marca: 'Get 40% off Dropbox Standard or Advanced',
      nombre_categoria: 'Software',
    },
    {
      nombre_marca: 'Yahoo!',
      imagen_marca: 'assets/img/yahoo.jpg',
      promo_marca: 'Save 50% with System Mechanic',
      nombre_categoria: 'Health & Beauty',
    },
  ];

  currentPage = 1;
  itemsPerPage = 7;

  get paginatedMarcas() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.lista_marcas.slice(start, end);
  }

  // Métodos para cambiar de página
  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.lista_marcas.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
