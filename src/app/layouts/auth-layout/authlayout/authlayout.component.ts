import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar/navbar.component";
import { FooterComponent } from "../../footer/footer/footer.component";

@Component({
  selector: 'app-authlayout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './authlayout.component.html',
  styleUrl: './authlayout.component.scss'
})
export class AuthlayoutComponent {
}
