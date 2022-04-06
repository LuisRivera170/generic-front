import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <app-header></app-header>
      </nb-layout-header>
    </nb-layout>
  `,
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
