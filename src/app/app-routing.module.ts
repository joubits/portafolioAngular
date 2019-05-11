import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

//RouterModule para trabajar con las rutas principales o rutas normales... NO rutas hijas!! 

const app_routes: Routes = [
    //cada ruta que se va a tener... Menu principal
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:term', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },


];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }