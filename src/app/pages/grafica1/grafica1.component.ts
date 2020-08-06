import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  ventaLabels = ['Indumentaria', 'Tecnologia', 'Deporte'];
  ventaData = [50, 30, 20];

  constructor() { }

  ngOnInit(): void {
  }

}
