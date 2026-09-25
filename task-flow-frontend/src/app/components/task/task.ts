import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TaskStatus } from '../../enum/task-status.enum';
import { Icon } from '../icon/icon';

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
  imports: [DatePipe, Icon],
  selector: 'app-task',
  styleUrl: './task.scss',
  templateUrl: './task.html',
})
export class Task {
  task = input.required<TaskModel>();
  done = computed(() => this.task().status === TaskStatus.DONE);
}
