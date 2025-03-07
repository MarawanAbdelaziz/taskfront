import { Component } from '@angular/core';
import { TitlesComponent } from "../titles/titles.component";

@Component({
  selector: 'app-header',
  imports: [TitlesComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  dotsIconG: string = 'assets/icons/dotsGray.svg';
  dotsIconB: string = 'assets/icons/dotsBlue.svg';
  saudiArabia: string = 'assets/icons/saudi-arabia.svg';
  image11: string = 'assets/images/image11.png';
}
