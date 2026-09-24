import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, take } from 'rxjs';

@Service()
export class TaskService {
  private http = inject(HttpClient);

  getTasks = () =>
    this.http.get('http://localhost:8080/api/tasks').pipe(
      map((el) => console.log(el)),
      take(1),
    );
}
