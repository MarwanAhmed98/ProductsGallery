import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkModeSignal = signal<string>(
    typeof window !== 'undefined' && window.localStorage.getItem('darkModeSignal')
      ? JSON.parse(window.localStorage.getItem('darkModeSignal') ?? '"dark"')
      : 'dark'
  );

  constructor() {
    if (typeof window !== 'undefined') {
      if (!window.localStorage.getItem('darkModeSignal')) {
        window.localStorage.setItem('darkModeSignal', JSON.stringify('dark'));
      }
      effect(() => {
        const value = this.darkModeSignal();
        localStorage.setItem('darkModeSignal', JSON.stringify(value));

        const html = document.documentElement;
        if (value === 'dark') {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
      });

    }
  }

  updateDarkMode() {
    this.darkModeSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
  }

  getMode() {
    return this.darkModeSignal();
  }
}