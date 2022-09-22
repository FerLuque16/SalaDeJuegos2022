import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Baraja, Mano } from 'src/app/interfaces/carta.interface';

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  apiUrl = 'https://deckofcardsapi.com/api/deck/';

  constructor(private http:HttpClient) { }

  obtenerBaraja():Observable<Baraja>{

    return this.http.get<Baraja>(`${this.apiUrl}/new/shuffle/?deck_count=1`);
  }

  obtenerMano(id:string):Observable<Mano>{
    return this.http.get<Mano>(`${this.apiUrl}/${id}/draw/?count=52`);
  }

}
