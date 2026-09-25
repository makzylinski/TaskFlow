import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidePanel } from './components/side-panel/side-panel';
import { Toolbar } from './components/toolbar/toolbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toolbar, SidePanel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('task-flow-frontend');
}
