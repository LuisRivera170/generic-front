import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public titleHeader = environment.appName;

  constructor(private menuService: NbMenuService) { }

  ngOnInit(): void {
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}
