import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje.interface';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  usuarioLogueado:any;
  nuevoMensaje:string = '';
  mensajes:Mensaje[]=[]

  constructor(private auth:AuthService, private firestore: AngularFirestore, private chatService: ChatService) { }

  ngOnInit(): void {
    this.auth.getUserLogged().subscribe(user=>{
      this.usuarioLogueado = user;
    });

    this.chatService.cargarMensajes().subscribe( mjs =>{
      this.mensajes = mjs;
    })
  }

  enviarMensaje(){
    const tiempo = new Date().getTime();
    const fecha = new Date(tiempo);    
    const fechaParseada = fecha.toString();

    let mensaje:Mensaje = {
      emisorId:this.usuarioLogueado.uid,
      emisorEmail:this.usuarioLogueado.email,
      emisorDisplayName: this.usuarioLogueado.displayName ? this.usuarioLogueado.displayName : '',
      texto: this.nuevoMensaje,
      fecha: fechaParseada
    }
    this.chatService.enviarMensaje(mensaje)
    
    
    this.chatService.cargarMensajes().subscribe( mjs =>{
      this.mensajes = mjs;
    })

    this.nuevoMensaje='';
  }


}
