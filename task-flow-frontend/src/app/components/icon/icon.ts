import { Component, input } from '@angular/core';

export type IconName = 'search' | 'plus' | 'boards' | 'members' | 'settings' | 'calendar' | 'check';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styles: `
    :host {
      display: inline-flex;
    }
  `,
})
export class Icon {
  name = input.required<IconName>();
  size = input(15);
  strokeWidth = input(2);
}
