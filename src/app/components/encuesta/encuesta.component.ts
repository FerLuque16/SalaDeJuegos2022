import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Encuesta } from 'src/app/interfaces/encuesta.interface';
import { AuthService } from 'src/app/services/auth.service';
import { EncuestaService } from 'src/app/services/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuestaForm: FormGroup;
  encuesta!:Encuesta;
  user:any;
  constructor(private fb: FormBuilder, private ruteo: Router, private auth: AuthService, private encuestaService: EncuestaService,
    private toastr:ToastrService) { 
      auth.getUserLogged().subscribe(usr=>{
        this.user = usr;
      })

      this.encuestaForm = fb.group({
        nombre:['',[Validators.required,Validators.minLength(2),Validators.pattern('^[A-Za-z]*')]],
        apellido:['',[Validators.required,Validators.minLength(2),Validators.pattern('^[A-Za-z]*')]],
        edad:['',[Validators.required,Validators.min(18)]],
        telefono:['',[Validators.required,Validators.pattern('^[0-9]*'),Validators.maxLength(10)]],
        puntuacion:['',[Validators.required]],
        juegoFavorito:['',[Validators.required]],
        texto: ['',[Validators.required, Validators.minLength(5)]]
      })
    }

  ngOnInit(): void {
  }

  enviarEncuesta(){
    this.encuesta = {
      ...this.encuestaForm.value,
      uid:this.user.uid,
      email:this.user.email
    }

    this.encuestaService.enviarEncuesta(this.encuesta);
    this.toastr.success('Encuesta enviada ','La encuesta se ha envidao correctamente correctamente');
    this.ruteo.navigate(['/home'])
  }

}
