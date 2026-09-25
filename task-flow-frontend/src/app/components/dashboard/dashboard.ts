import { Component, inject, signal } from '@angular/core';
import { BoardService } from '../../services/board-service';
import { BoardModal, NewBoard } from '../board-modal/board-modal';

@Component({
  imports: [BoardModal],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private boardService = inject(BoardService);

  modalOpen = signal(false);

  addBoard(newBoard: NewBoard) {
    this.boardService.saveNewBoard(newBoard).subscribe();
    this.modalOpen.set(false);
  }
}
