import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FullProducto } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  idProducto:number;
  fullProducto:FullProducto;

  constructor( private route: ActivatedRoute,
                public productoService: ProductosService ) { }

  ngOnInit() {
    this.route.params
      .subscribe( params => {
          //console.log(params['id']);
          this.productoService.getProducto(params['id'])
            .subscribe( (producto:FullProducto) => {
              //console.log(producto);
              this.idProducto = params['id'];
              this.fullProducto = producto;
            } );
      } );
  }

}
