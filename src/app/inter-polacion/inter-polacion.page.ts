import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inter-polacion',
  templateUrl: './inter-polacion.page.html',
  styleUrls: ['./inter-polacion.page.scss'],
})
export class InterPolacionPage implements OnInit {
persona={
  direccion:'egaña #1234. puerto montt',
  nombre:'Roberto',
  apellido:'Diaz',
  }
  SumaDeDosNumeros(num1:number,num2:number){
  return num1 + num2};



  constructor() { }

  ngOnInit() {
  }

}
