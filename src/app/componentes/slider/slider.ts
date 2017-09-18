import { Component, Input } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider {
  @Input() nombre:string;
  @Input() inicio:number;
  @Input() fin:number;

  private opts=[];
  constructor() {
  	this.nombre="Sin nombre";
    this.inicio=0;
    this.fin=5;

  }

  ngOnInit(){
    for(var i=this.inicio;i<=this.fin;i++){
      this.opts.push(i);
    }

  }

  alerta(){
  	alert(this.nombre)
  }
}
