import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] =  [];
  cargando = true;
  productoFiltrado: Producto[] =  [];

  constructor( private http:HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise( ( resolve, reject  ) => {
      this.http.get('https://html-angular-632eb.firebaseio.com/productos_idx.json')
      .subscribe( (resp:Producto[]) => {
        //console.log(resp);
        this.cargando = false;
        this.productos = resp;
        resolve();
        
        //para retrasar la carga de los datos, mediante el uso de setTimeOut
        /*
        setTimeout(() => {
          this.cargando = false;
        }, 5000);
        */
        
      });
    });

    
  }

  getProducto( id: string) {
    return this.http.get(`https://html-angular-632eb.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( texto: string ){
    if(this.productos.length===0){
      //esperar a q carguen los productos
      this.cargarProductos().then( () => {
        //despues de tener los productos
        this.filtrarProductos(texto);
      });
    }else {
      this.filtrarProductos(texto);
    }
  }

  private filtrarProductos ( term: string ){
    //console.log(this.productos);
    this.productoFiltrado = [];
    this.productos.forEach( prod => {
      if(prod.categoria.toLowerCase().indexOf( term )>=0 || prod.titulo.toLowerCase().indexOf( term ) >= 0){
        this.productoFiltrado.push( prod );
      }
    });
  }
}
