import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = '';
  pass: string = '';

  constructor(private firestore: AngularFirestore, private ruteo:Router, private auth:AuthService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  async login(user:string, pass:string){
    try{
      await this.auth.login(user,pass)
      this.toastr.success('Logueado correctamente','Usted se a logueado correctamente');
      const tiempo = new Date().getTime();
      const fecha = new Date(tiempo);    
      const fechaParseada = fecha.toString();

      const dataRegistro = {
        usuario: user,
        fechaDeIngreso: fechaParseada      
      }
      await this.firestore.collection('ingresos').add(dataRegistro);
      this.ruteo.navigate(['home']);
      this.ruteo.navigateByUrl('home');

    }
    catch{
      this.toastr.error('Error','Ha sucedido un error al loguearse');
    }
  }

  logueoRapido(){
    this.user = 'test@gmail.com';
    this.pass = 'test123';
  }
  redirigir(){
    this.ruteo.navigateByUrl('registro');
  }


}
