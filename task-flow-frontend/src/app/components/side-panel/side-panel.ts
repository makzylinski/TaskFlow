import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  imports: [Icon, RouterLink, RouterLinkActive],
  selector: 'app-side-panel',
  styleUrl: './side-panel.scss',
  templateUrl: './side-panel.html',
})
export class SidePanel {}
