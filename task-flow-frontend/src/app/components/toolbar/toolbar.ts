import { Component, inject, signal } from '@angular/core';
import { BoardService } from '../../services/board-service';
import { BoardModal, NewBoard } from '../board-modal/board-modal';
import { Icon } from '../icon/icon';

@Component({
  imports: [Icon, BoardModal],
  selector: 'app-toolbar',
  styleUrl: './toolbar.scss',
  templateUrl: './toolbar.html',
})
export class Toolbar {
  private boardService = inject(BoardService);

  modalOpen = signal(false);

  addBoard(newBoard: NewBoard) {
    this.boardService.saveNewBoard(newBoard).subscribe(() => this.modalOpen.set(false));
  }

  onSearchChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    this.boardService.setSearchPhrase(value);
  };
}
