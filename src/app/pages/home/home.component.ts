import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { TableComponent } from "../../components/table/table.component";
import { HeaderComponent } from "../../components/header/header.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent, TableComponent, HeaderComponent, NavbarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
