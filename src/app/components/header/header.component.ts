import { Component } from '@angular/core';
import { TitlesComponent } from '../titles/titles.component';
import { CommonModule } from '@angular/common';

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
  editIcon: string = 'assets/icons/edit.svg';
  cancelIcon: string = 'assets/icons/cancel.svg';


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
