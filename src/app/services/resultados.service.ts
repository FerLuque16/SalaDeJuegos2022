import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Resultado } from 'src/app/interfaces/resultado.interface';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private itemsCollection!: AngularFirestoreCollection<Resultado>;
  items!: Observable<Resultado[]>;

  constructor(private firestore: AngularFirestore) { }

  enviarResultado(resultado:Resultado){
    this.firestore.collection('resultados').add(resultado);
  }

  traerResultados(){
    this.itemsCollection = this.firestore.collection<Resultado>('resultados');

    return this.itemsCollection.valueChanges()
  }
  
}
