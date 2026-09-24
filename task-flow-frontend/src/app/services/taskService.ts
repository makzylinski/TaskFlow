import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class TaskService {
  private http = inject(HttpClient);

  getTasks = () => this.http.get('http://localhost:8080/api/tasks');
}
