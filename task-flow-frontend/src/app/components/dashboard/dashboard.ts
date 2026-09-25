import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BoardService } from '../../services/board-service';
import { BoardModal, NewBoard } from '../board-modal/board-modal';

@Component({
  imports: [BoardModal, RouterLink],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private boardService = inject(BoardService);

  boards = this.boardService.boards;
  boardList = computed(() => this.boards.value() ?? []);
  modalOpen = signal(false);

  addBoard(newBoard: NewBoard) {
    this.boardService.saveNewBoard(newBoard).subscribe(() => {
      this.boards.reload();
      this.modalOpen.set(false);
    });
  }
}
