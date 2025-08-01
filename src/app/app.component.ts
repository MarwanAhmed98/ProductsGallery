import { DarkModeService } from './core/services/DarkMode/dark-mode.service';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { NgxSpinnerComponent } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MyApp';
  DarkModeService: DarkModeService = inject(DarkModeService)
  constructor(private FlowbiteService: FlowbiteService) { }
  ngOnInit(): void {
    this.FlowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

  }
}
