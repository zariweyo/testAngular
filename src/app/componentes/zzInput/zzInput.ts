import { Component, Input } from '@angular/core';

@Component({
  selector: 'zz-input',
  templateUrl: './zzInput.html',
  styleUrls: ['./zzInput.css']
})
export class ZzInput {
  @Input() nombre:string;
  @Input() valor:string;
  @Input() tipo:string;
  constructor() {
  	this.nombre="Sin nombre";
  }

  alerta(){
  	alert(this.nombre)
  }
}
