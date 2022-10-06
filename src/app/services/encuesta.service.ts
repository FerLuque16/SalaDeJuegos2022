import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Encuesta } from '../interfaces/encuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private itemsCollection!: AngularFirestoreCollection<Encuesta>;
  items!: Observable<Encuesta[]>;
  constructor(private firestore: AngularFirestore) { }

  enviarEncuesta(encuesta:Encuesta){
    this.firestore.collection('encuestas').add(encuesta);
  }
}
