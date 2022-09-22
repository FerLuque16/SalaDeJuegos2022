import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/interfaces/mensaje.interface';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection!: AngularFirestoreCollection<Mensaje>;
  items!: Observable<Mensaje[]>;

  constructor(private auth:AuthService, private firestore: AngularFirestore) { }

  cargarMensajes(){
    this.itemsCollection = this.firestore.collection<Mensaje>('mensajes');
    return this.items = this.itemsCollection.valueChanges();
  }

  enviarMensaje(mensaje:Mensaje){
    this.firestore.collection('mensajes').add(mensaje);
  }
}
