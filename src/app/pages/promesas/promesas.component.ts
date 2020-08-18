import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* const promesa = new Promise((res, rej) => {
      if (false) {
        res('hola mundo');
      } else {
        rej('salio mal');
      }
    });

    promesa.then((data) => {
      console.log(data);
    }).catch((e) => {
      console.log('error en mi promesa --->', e);
    });

    console.log('fin del init'); */

    this.getUsuarios().then(resp => console.log(resp));
  }

  getUsuarios(): Promise<any> {

    return new Promise((res, rej) => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => res(body.data));
    });

  }

}
