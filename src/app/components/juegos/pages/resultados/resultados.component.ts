import { Component, OnInit } from '@angular/core';
import { Resultado } from 'src/app/interfaces/resultado.interface';
import { ResultadosService } from 'src/app/services/resultados.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados: Resultado[] = [];
  constructor(private resultadoService: ResultadosService) { }

  ngOnInit(): void {
    this.resultadoService.traerResultados().subscribe(data =>{
      this.resultados = data;
    })
  }

}
