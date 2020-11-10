import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent implements OnInit {
  isCollapsed: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}