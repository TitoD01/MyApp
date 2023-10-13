import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  nameUser="Francisco"
  enviarDatos(){
  localStorage.setItem('Nombre usuario',this.nameUser);
  this.router.navigate(['/home']);
}


  eliminarDatos(){
    localStorage.removeItem('Nombre usuario')
  }


  limpiarDatos(){
    localStorage.clear()
  }
nombre=localStorage.getItem('Nombre usuario')
  irLogin(){
    console.log('nombre usuario:',this.nameUser);
    this.router.navigate(['/login'])
  }

  irAnime1() {
    this.router.navigate(['/anime1']);
  }
  
  constructor(private router:Router) {}



}
