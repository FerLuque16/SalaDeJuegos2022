import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';
import { ChatModule } from './chat/chat.module';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'juegos',
    loadChildren:()=>import('./components/juegos/juegos.module').then(m => m.JuegosModule)
  },
  {
    path:'chat',
    loadChildren:()=>import('./chat/chat.module').then(m => ChatModule)
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'quiensoy',
    component:QuienSoyComponent
  },
  {
    path:'errorUsuario',
    component:ErrorComponent
  },
  {
    path:'encuesta',
    component:EncuestaComponent,
    canActivate:[UsuarioLogueadoGuard]
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
