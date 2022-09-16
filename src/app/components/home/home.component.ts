import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User} from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayLogout = false;
  displayLogIn = false;
  displayRegister = false;
  displayUser = false;

  usuario:User;
  constructor(private auth: AngularFireAuth, private authService: AuthService, private ruteo:Router) { 
    this.usuario ={
      username: '',
      email: ''
    };

    auth.authState.subscribe( user =>{
      if(user){
       this.usuario.email = user.email!;
       this.displayUser = true;
       this.displayLogout = true;
       console.log(user)
       console.log(this.usuario)
      }
      else{
       this.displayLogIn = true;
       this.displayRegister = true;
       this.displayLogout = false;
       this.displayUser = false;
     }
   })

  }

  ngOnInit(): void {
    
  }

  logOut(){
    this.displayLogout = false;
    this.displayUser = false;
    this.usuario ={
      username: '',
      email: ''
    };
    return this.authService.logOut();
  }
  
  navegarHacia(path:string){
    this.ruteo.navigateByUrl(path);
  }

}
