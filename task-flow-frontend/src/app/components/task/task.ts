import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { TaskStatus } from '../enum/task-status.enum';

export interface TaskModel {
  id: number;
  name: string;
  description: string;
  dateCreated: string;
  status: TaskStatus;
  boardId: number | null;
  userId: number | null;
}

@Component({
  imports: [DatePipe],
  selector: 'app-task',
  styleUrl: './task.scss',
  templateUrl: './task.html',
})
export class Task {
  task = input.required<TaskModel>();
}
