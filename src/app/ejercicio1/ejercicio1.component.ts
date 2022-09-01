import { Component, OnInit } from '@angular/core';

import {Operaciones} from 'src/app/models/operaciones'

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  miOperacion: Operaciones;

  constructor() {
    this.miOperacion = new Operaciones;
   }

  ngOnInit(): void {
  }

}
