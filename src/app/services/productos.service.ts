import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] =  [];
  cargando = true;

  constructor( private http:HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://html-angular-632eb.firebaseio.com/productos_idx.json')
      .subscribe( (resp:Producto[]) => {
        console.log(resp);
        this.cargando = false;
        this.productos = resp;
        //para retrasar la carga de los datos, mediante el uso de setTimeOut
        /*
        setTimeout(() => {
          this.cargando = false;
        }, 5000);
        */
        
      });

  }
}
