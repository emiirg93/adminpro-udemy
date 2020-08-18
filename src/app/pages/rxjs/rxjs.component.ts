import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() {
    /* this.retornaObservable().pipe(
      // retry se dispara si hubo un error. Este hace que vuelva a intentar resolver el observable.
      retry()
    ).subscribe(
      valor => console.log('subs : ', valor),
      error => console.warn('error : ', error),
      () => console.log('obs terminada'),
    ); */

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


  retornaObservable(): Observable<number> {
    let i = -1;

    // si es una variable que hace referencia a un observable por convencion se usa el $ al final.
    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        // permite emitir informacion del observable.
        observer.next(i);

        if (i === 4) {
          // corta el setInterval.
          clearInterval(intervalo);
          // determino cuando esta todo terminado en el observable
          observer.complete();
        }

        if (i === 2) {
          // emito un error.
          observer.error('i llego al valor de 2');
        }

      }, 1000);
    });
  }

  retornaIntervalo(): Observable<number> {
    // take completa el observable segun cuantas emisiones le especifiquemos.
    /* return interval(5000)
      .pipe(
        map(valor => `Hola mundo ${valor + 1}`),
        take(10),
      ); */

    return interval(100)
      .pipe(
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0) ? true : false),
        /* take(10), */
      );
  }
}
