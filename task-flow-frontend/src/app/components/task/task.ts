import { Component, input } from '@angular/core';

export interface TaskModel {
  id: number;
  type: string;
  title: string;
  date: string;
  person: string;
  description?: string;
}

@Component({
  imports: [],
  selector: 'app-task',
  styleUrl: './task.scss',
  templateUrl: './task.html',
})
export class Task {
  task = input.required<TaskModel>();
}
