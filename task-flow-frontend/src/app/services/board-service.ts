import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { tap } from 'rxjs';
import { NewBoard } from '../components/board-modal/board-modal';
import { BoardModel } from '../models/board.model';

@Service()
export class BoardService {
  private readonly baseUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);
  readonly boards = httpResource<BoardModel[]>(() => `${this.baseUrl}/boards`);

  saveNewBoard = (board: NewBoard) =>
    this.http.post(this.baseUrl + '/new-board', board).pipe(tap(() => this.boards.reload()));
}
