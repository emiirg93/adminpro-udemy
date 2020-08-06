import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [
    './progress.component.css'
  ]
})
export class ProgressComponent implements OnInit {

  progreso1 = 25;
  progreso2 = 35;

  constructor() { }

  ngOnInit(): void {
  }

  get getProgreso1(): string {
    return `${this.progreso1}%`;
  }

  get getProgreso2(): string {
    return `${this.progreso2}%`;
  }

  /* cambiarValor(valor: number): void {
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso += valor;
  } */

  cambioValorHijo(valor: number): void {
    console.log(valor);
  }

}
