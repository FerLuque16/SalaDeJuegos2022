import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosComponent } from './pages/juegos.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { MayormenorComponent } from './pages/mayormenor/mayormenor.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { ReflejosComponent } from './pages/reflejos/reflejos.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';


@NgModule({
  declarations: [
    JuegosComponent,
    AhorcadoComponent,
    MayormenorComponent,
    MenuComponent,
    PreguntadosComponent,
    ReflejosComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
