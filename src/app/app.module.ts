import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';

import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { ErrorComponent } from './components/error/error.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { HomeComponent } from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';
import { EncuestaComponent } from './components/encuesta/encuesta.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    Ejercicio1Component,
    ErrorComponent,
    QuienSoyComponent,
    HomeComponent,
    NavbarComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
    
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
