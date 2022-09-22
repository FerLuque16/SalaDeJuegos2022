import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLogueadoGuard } from 'src/app/guards/usuario-logueado.guard';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { JuegosComponent } from './pages/juegos.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path:'',
    component:JuegosComponent,
    children:[
      {
        path:'menu',
        component:MenuComponent,
        canActivate:[UsuarioLogueadoGuard]
      },
      {
        path:'ahorcado',
        component:AhorcadoComponent,
        canActivate:[UsuarioLogueadoGuard]
      },
      {
        path:'mayormenor',
        component:MayormenorComponent,
        canActivate:[UsuarioLogueadoGuard]
      },
      {
        path:'**',
        redirectTo:'menu'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
