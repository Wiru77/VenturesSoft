import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private _http: HttpClient) {}

  lista_categorias(): Observable<any> {
    let headers = new HttpHeaders({});
    console.log('se');

    return this._http.get(
      'https://eland-dk.humaneland.net/Examen/AngularApi/Categorias',
      {
        headers: headers,
      }
    );
  }
}
