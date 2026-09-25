import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { tap } from 'rxjs';
import { NewBoard } from '../components/board-modal/board-modal';
import { BoardModel } from '../models/board.model';
import { searchBoard } from '../utils/toolbar.util';

@Service()
export class BoardService {
  private readonly baseUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);
  readonly boards = httpResource<BoardModel[]>(() => `${this.baseUrl}/boards`);
  private searchPhrase = signal('');

  filteredBoards = computed(() => searchBoard(this.boards.value() ?? [], this.searchPhrase()));

  saveNewBoard = (board: NewBoard) =>
    this.http.post(this.baseUrl + '/new-board', board).pipe(tap(() => this.boards.reload()));

  setSearchPhrase(phrase: string) {
    this.searchPhrase.set(phrase);
  }
}
