import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) { 
    //console.log("Info pag service listo...");
    //Leer los datos json para cargar en la pagina principal cada vez q cargue el sitio web...
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp:infoPagina) => {
        this.cargada = true;
        this.info = resp;
        //console.log(this.info);

      } );


   }
}
