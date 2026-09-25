import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { NewBoard } from '../components/board-modal/board-modal';

@Service()
export class BoardService {
  private readonly baseUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  saveNewBoard = (board: NewBoard) => this.http.post(this.baseUrl + '/new-board', board);
}
