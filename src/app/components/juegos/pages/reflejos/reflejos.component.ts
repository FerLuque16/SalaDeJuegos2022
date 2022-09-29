import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

import { Resultado } from 'src/app/interfaces/resultado.interface';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-reflejos',
  templateUrl: './reflejos.component.html',
  styleUrls: ['./reflejos.component.css']
})
export class ReflejosComponent implements OnInit {

  startTime=new Date();
  endTime=new Date();
  iniciarPresionado=false;
  bgChangeStarted=false;
  maxWait=20;
  timerID!:any;

  responseTime:number = 0;

  multiplicadorRandom=0x015a4e35;
  randINCREMENT=1;
  today=new Date();
  randSeed=this.today.getSeconds();

  displayModal:boolean = false;
  modalMsj1:string = '';
  modalMsj2: string = '';

  cambiarBg:boolean = false;

  user:any;

  constructor(private ruteo: Router, private auth: AuthService, private resultadoService: ResultadosService) { 
    auth.getUserLogged().subscribe(usr =>{
      this.user =  usr
    })
  }

  ngOnInit(): void {
  }

  startTest()
  {
      this.cambiarBg = true;
      this.bgChangeStarted=true;
      this.startTime=new Date();
  }

  stopTest(){
    if(this.bgChangeStarted)
    {
        this.endTime=new Date();
        this.responseTime=(this.endTime.getTime()-this.startTime.getTime())/1000;

        
        this.mostrarModal(`Tu tiempo de respuesta es de : ${this.responseTime} segundos`,'¿Desea jugar otra vez?')
        this.iniciarPresionado=false;
        this.bgChangeStarted=false;
        this.cambiarBg = false;
    }
    else
    {
        if (!this.iniciarPresionado)
        {
            // alert("Presione iniciar primero");
        }
        else
        {       
            clearTimeout(this.timerID);
            this.iniciarPresionado=false;             
            // alert("Presionaste antes!");
        }               
    }
  }

  randNumber(){
    this.randSeed = (this.multiplicadorRandom * this.randSeed + this.randINCREMENT) % (1 << 31);
    console.log(this.randSeed);
    return((this.randSeed >> 15) & 0x7fff) / 32767;
  }
  
  startit(){
    if(this.iniciarPresionado)
    {
        // alert("Ya empezó. Presione detener para deneter");
        return;
    }
    else
    {
        this.iniciarPresionado=true; 
        this.timerID=setTimeout(()=>{
          this.cambiarBg = true;
          this.bgChangeStarted=true;
          this.startTime=new Date();
        }, 6000*this.randNumber());
    }
  }

  terminarJuego(){

    const tiempo = new Date().getTime();
    const fecha = new Date(tiempo);    
    const fechaParseada = fecha.toString();

    let resultado: Resultado = {
      uid: this.user.uid,
      email: this.user.email,
      fecha: fechaParseada,
      juego: 'Reflejos',
      resultado: `El tiempo de respuesta fue de ${this.responseTime} segundos`
    }
    this.resultadoService.enviarResultado(resultado);
    this.displayModal = false;
    this.ruteo.navigateByUrl('/juegos')
  }
  reiniciar(){
    this.displayModal = false;
  }

  mostrarModal(msj1:string,msj2:string){
    this.displayModal=true;
    this.modalMsj1 = msj1;
    this.modalMsj2 = msj2;
  }

}
