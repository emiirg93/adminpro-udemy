import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progreso = 20;
  @Input() btnClass = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  inputInvalido: boolean;

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor: number): void {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }

    this.progreso += valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number): void {

    this.inputInvalido = nuevoValor > 100 || nuevoValor < 0;

    if (nuevoValor >= 100) {
      this.progreso = 100;
    } else if (nuevoValor <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit(this.progreso);
  }

}
