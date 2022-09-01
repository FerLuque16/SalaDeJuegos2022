import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';
import { HomeComponent } from './main/pages/home/home.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { NotFoundComponent } from './error/pages/not-found/not-found.component';
import { BienvenidoComponent } from './main/pages/bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    Ejercicio1Component,
    NotFoundComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
