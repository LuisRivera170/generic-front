import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NbMenuService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public titleHeader = environment.appName;
  public themeIcon = 'sun-outline';

  constructor(private menuService: NbMenuService,
              private themeService: NbThemeService) { }

  ngOnInit(): void {
    this.themeService
      .onThemeChange()
      .subscribe((theme: any) => {
        this.themeIcon = theme.name === 'default' ? 
          'sun-outline' : 
          'moon-outline';
      });
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  toggleTheme() {
    this.themeService.currentTheme === 'default' ?
      this.themeService.changeTheme('dark') :
      this.themeService.changeTheme('default');
  }

}
