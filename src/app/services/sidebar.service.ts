import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Menu[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      subMenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
      ]
    }
  ];

  constructor() { }
}

export interface Menu {
  titulo: string;
  icono: string;
  subMenu: SubMenu[];
}

export interface SubMenu {
  titulo: string;
  url: string;
}
