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
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'Graficas', url: 'grafica1' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ]
    }
  ];

  constructor() {
    this.sortSubMenus();
  }

  sortSubMenus(): void {
    for (const iterator of this.menu) {
      iterator.subMenu = iterator.subMenu.sort((a, b) => a.titulo.toLowerCase().localeCompare(b.titulo.toLowerCase()));
    }
  }
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
