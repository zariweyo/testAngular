import { Component, Input } from '@angular/core';
import { Objetos } from '../clases/objetos';
import { Objeto } from '../clases/objeto';

@Component({
  selector: 'zz-form',
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class ZzForm{
  @Input() nombre:string;
  public nombre_1:string = "amigo";
  public valor_1:string = "adios";
  public tipo_1:string = "T1";

  public nombre_2:string = "K2";
  public valor_2:string = "V2";
  public tipo_2:string = "T2";

  public objetos:any;

  ngOnInit() {
  	this.nombre="Sin nombre";

  	/*
  	let _obj=[
  		new Objeto("n1","v1"),
  		new Objeto("n2","v2"),
  		new Objeto("n3","v3"),
  		new Objeto("n4","v4")
  	];

  	this.objetos = new Objetos(_obj);
  	*/

  	this.objetos = [
  		{nombre:'N1',valor:'V1',tipo:'T1'},
  		{nombre:'N2',valor:'V2',tipo:'T2'},
  		{nombre:'N3',valor:'V3',tipo:'T1'},
  	]
  }
}
