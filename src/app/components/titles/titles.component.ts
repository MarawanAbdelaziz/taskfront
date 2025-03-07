import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titles',
  imports: [],
  templateUrl: './titles.component.html',
})
export class TitlesComponent {
  @Input() title: string = '';
  @Input() des: string = '';
  @Input() imageSrc?: string;
  @Input() price: boolean = false;
  @Input() number: boolean = false;
}
