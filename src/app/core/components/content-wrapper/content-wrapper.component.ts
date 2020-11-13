import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MENU_OBJ } from '../../mocks/menu';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent implements OnInit {
  isCollapsed: boolean = false;
  theme = true;
  mode = false;
  menus: any[] = [];
  visible = false;

  constructor() {}

  getListMenu(): Observable<any[]> {
    return of(MENU_OBJ);
  }

  ngOnInit(): void {
    this.getListMenu().subscribe((m) => {
      this.menus = m;
    });
  }

  openDrawerRight(): void {
    this.visible = true;
  }

  closeDrawerRight(): void {
    this.visible = false;
  }
}
