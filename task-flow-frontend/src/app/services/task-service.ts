import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { TaskStatus } from '../components/enum/task-status.enum';
import { TaskModel } from '../components/task/task';

@Service()
export class TaskService {
  private readonly baseUrl = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  getTasks = (boardId: number) => this.http.get<TaskModel[]>(`${this.baseUrl}/tasks/${boardId}`);

  updateTaskStatus = (taskId: number, status: TaskStatus) =>
    this.http.patch<TaskModel>(`${this.baseUrl}/tasks/${taskId}/status`, { status });

  saveNewTask =(name: string, description: string, boardId: number) =>
    this.http.post(this.baseUrl + '/new-task', {
      name,
      description,
      boardId,
    });
}
