import { DatePipe } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { TaskModel } from '../task/task';

@Component({
  selector: 'app-task-detail',
  imports: [DatePipe],
  styleUrl: './task-detail.scss',
  templateUrl: './task-detail.html',
  host: { '(document:keydown.escape)': 'close()' },
})
export class TaskDetail {
  task = input.required<TaskModel>();
  closed = output<void>();

  closing = signal(false);

  close() {
    this.closing.set(true);
  }

  onAnimationEnd() {
    if (this.closing()) {
      this.closed.emit();
    }
  }
}
