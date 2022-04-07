import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<app-base-layout>
            <router-outlet></router-outlet>
            </app-base-layout>`,
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
