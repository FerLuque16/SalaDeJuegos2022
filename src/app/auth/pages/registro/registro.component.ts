import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:string = '';
  pass: string = '';
  constructor(private firestore: AngularFirestore, public auth:AuthService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  async registrar(name:string, pass:string){
    try {
      await this.auth.registrar(name,pass);
      this.toastr.success('Registrado correctamente','Usted se ha registrado correctamente');
      this.router.navigateByUrl('home');
    } catch (error:any) {
      this.toastr.error(error.code,'Error al registrarse');
    }
    
  }

  redirigir(path:string){
    this.router.navigateByUrl(path);
  }

}
