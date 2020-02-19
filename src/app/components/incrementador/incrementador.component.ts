import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @Input() porcentaje: number = 50;
  @Input() leyenda: string = '';

  constructor() {   }

  ngOnInit(): void {
  }

  cambiarValor ( valor ){
    if ( this.porcentaje >= 100 && valor > 0) return;
    if ( this.porcentaje <= 0 && valor < 0) return;
    this.porcentaje = this.porcentaje + valor;
  }

}
