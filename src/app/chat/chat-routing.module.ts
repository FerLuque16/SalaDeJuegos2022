import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLogueadoGuard } from '../guards/usuario-logueado.guard';
import { ChatComponent } from './chat.component';

const routes: Routes = [
  {
    path:'',
    component:ChatComponent,
    canActivate:[UsuarioLogueadoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
