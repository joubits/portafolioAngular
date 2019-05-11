import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { infoPagina } from '../../interfaces/info-pagina.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //infoPage: infoPagina = {};

  constructor( public data_pagina: InfoPaginaService,
                private route: Router ) { 
    //this.infoPage = data_pagina.info;
    //console.log(this.data_pagina.info['titulo']);
  }

  ngOnInit() {
  }
  //console.log(this.infoPage);
  buscarProducto( texto:string ){
    if(texto.length<1){
      return;
    }

    this.route.navigate(['/search', texto]);
    //console.log(texto);
  }

}
