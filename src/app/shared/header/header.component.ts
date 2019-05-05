import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { infoPagina } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //infoPage: infoPagina = {};

  constructor( public data_pagina: InfoPaginaService ) { 
    //this.infoPage = data_pagina.info;
    //console.log(this.data_pagina.info['titulo']);
  }

  ngOnInit() {
  }
  //console.log(this.infoPage);

}
