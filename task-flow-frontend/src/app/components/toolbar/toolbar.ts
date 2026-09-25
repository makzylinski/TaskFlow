import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { BoardService } from '../../services/board-service';
import { BoardModal, NewBoard } from '../board-modal/board-modal';
import { Icon } from '../icon/icon';

@Component({
  imports: [Icon, BoardModal, RouterLink],
  selector: 'app-toolbar',
  styleUrl: './toolbar.scss',
  templateUrl: './toolbar.html',
})
export class Toolbar {
  private boardService = inject(BoardService);
  private router = inject(Router);

  modalOpen = signal(false);

  private url = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  private boardId = computed(() => {
    const match = /^\/board\/(\d+)/.exec(this.url());
    return match ? Number(match[1]) : null;
  });

  isBoardView = computed(() => this.boardId() !== null);

  boardName = computed(
    () => this.boardService.boards.value()?.find((b) => b.id === this.boardId())?.name ?? '',
  );

  addBoard(newBoard: NewBoard) {
    this.boardService.saveNewBoard(newBoard).subscribe(() => this.modalOpen.set(false));
  }

  onSearchChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.boardService.setSearchPhrase(value);
  };
}
