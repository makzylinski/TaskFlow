import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class TaskService {
  private readonly baseUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  getTasks = () => this.http.get(this.baseUrl + '/tasks');

  saveNewTask = (name: string, description: string, boardId: number) =>
    this.http.post(this.baseUrl + '/new-task', {
      name,
      description,
      boardId,
    });
}
