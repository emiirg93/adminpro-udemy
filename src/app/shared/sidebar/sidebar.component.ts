import { Component, OnInit } from '@angular/core';
import { SidebarService, Menu } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: Menu[];

  constructor(
    private sideBarService: SidebarService,
  ) {
    this.menuItems = this.sideBarService.menu;
  }

  ngOnInit(): void {
  }

}
