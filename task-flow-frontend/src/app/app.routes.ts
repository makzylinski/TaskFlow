import { Routes } from '@angular/router';
import { Board } from './components/board/board';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'board', component: Board },
  { path: '**', redirectTo: 'dashboard' },
];
