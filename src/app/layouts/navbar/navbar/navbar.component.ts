import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkModeService } from '../../../core/services/DarkMode/dark-mode.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLogin = input<boolean>(true);
  darkModeService: DarkModeService = inject(DarkModeService);
  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
  }

}
