import { Routes } from '@angular/router';
import { Board } from './components/board/board';

export const routes: Routes = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'board', component: Board },
  { path: '**', redirectTo: 'board' },
];
