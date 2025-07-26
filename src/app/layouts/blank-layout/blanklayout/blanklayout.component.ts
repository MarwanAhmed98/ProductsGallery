import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar/navbar.component";
import { FooterComponent } from "../../footer/footer/footer.component";

@Component({
  selector: 'app-blanklayout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './blanklayout.component.html',
  styleUrl: './blanklayout.component.scss'
})
export class BlanklayoutComponent {
}
