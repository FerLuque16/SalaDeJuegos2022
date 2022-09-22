import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { Resultado } from 'src/app/interfaces/resultado.interface';
import { ResultadosService } from 'src/app/services/resultados.service';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  letras:string[] = [];

  palabras:string[] = ['auto','casa','avion','patio','cocina','luz','ciudad','teclado','pantalla'];

  palabraAdivinar:string[] = [];
  palabraAMostrar:string[] = [];

  palabraElegida:string = '';//Palabra a la cual voy a estar adivinando

  palabraResultado: string = '';

  letrasRestantes: number = 0;

  cantidadIntentos: number = 0;


  cantidadAdivinados: number = 0;
  cantidadJugados: number = 1;


  displayModal:boolean = false;
  modalMsj1:string = '';
  modalMsj2: string = '';

  user:any;
  constructor(private ruteo: Router, private auth:AuthService, private resultadoService: ResultadosService){ 
    auth.getUserLogged().subscribe(usr =>{
      this.user = usr;
    })
  }

  ngOnInit(): void {
    this.iniciarJuego();
  }

  iniciarJuego(){
    this.letras= [
      'a','b','c','d','e','f','g','h','i','j','k',
      'l','m','n','ñ','o','p','q','r','s','t','u',
      'v','w','x','y','z'];
    this.palabraAdivinar = [];
    this.palabraAMostrar = [];
    this.palabraElegida = '';//Palabra a la cual voy a estar adivinando
    this.palabraResultado = '';
    this.letrasRestantes = 0;
    this.cantidadIntentos = 5;

    const numeroRandom = this.randomNumber();
    // console.log(numeroRandom)
    this.palabraElegida = this.palabras[numeroRandom];
    this.palabraAdivinar = this.palabraElegida.split('');
    
    this.palabraAdivinar.forEach(e =>this.palabraAMostrar.push('_'));
    this.palabraResultado = this.palabraAMostrar.join('');
    this.letrasRestantes = this.palabraAMostrar.length;
  }

  reiniciar(){
    this.cantidadJugados++;
    this.displayModal = false;
    this.iniciarJuego();
  }
  terminarJuego(){
    this.displayModal = false;

    const tiempo = new Date().getTime();
    const fecha = new Date(tiempo);    
    const fechaParseada = fecha.toString();

    let resultado: Resultado = {
      uid: this.user.uid,
      email: this.user.email,
      fecha: fechaParseada,
      juego: 'Ahorcado',
      aciertos: this.cantidadAdivinados,
      intentos: this.cantidadJugados
    }

    this.resultadoService.enviarResultado(resultado);
    this.cantidadAdivinados = 0;
    this.ruteo.navigateByUrl('juegos');
  }

  letraSeleccionada(letra:string){
    if(this.palabraAdivinar.includes(letra)){


      this.palabraAdivinar.forEach((a,index) => {

        if(a == letra){
          this.palabraAMostrar[index] = a 
          this.letrasRestantes--;
        }
      })

      if(this.letrasRestantes == 0){
        this.cantidadAdivinados++;
        setTimeout(() => {       
          this.mostrarModal('GANASTE','¿Queres seguir jugando?');
        }, 500);     
      }


      this.letras.splice(this.letras.indexOf(letra),1);
      
      this.palabraResultado = this.palabraAMostrar.join('');
      
    }
    else{
      this.cantidadIntentos--;
      this.letras.splice(this.letras.indexOf(letra),1);
      if(this.cantidadIntentos == 0){
        setTimeout(() => {
          this.mostrarModal('PERDISTE','¿Queres seguir jugando?')
        }, 500);
      }
    }
  }

  randomNumber(){
    return Math.floor(Math.random() * this.palabras.length);
  }

  mostrarModal(msj1:string,msj2:string){
    this.displayModal=true;
    this.modalMsj1 = msj1;
    this.modalMsj2 = msj2;
  }
}
