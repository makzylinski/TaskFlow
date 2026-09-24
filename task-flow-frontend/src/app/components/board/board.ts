import {
  CdkDragDrop,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/taskService';
import { Column } from '../column/column';
import { TaskModel } from '../task/task';

@Component({
  selector: 'app-board',
  imports: [CdkDropListGroup, Column],
  styleUrl: './board.scss',
  templateUrl: './board.html',
})
export class Board {
  private taskService = inject(TaskService);

  todo: TaskModel[] = [
    { id: 1, type: 'Design', title: 'Design new onboarding flow', date: 'Oct 3', person: 'MZ' },
    { id: 2, type: 'Dev', title: 'Setup CI', date: 'Oct 5', person: 'MZ' },
  ];
  inProgress: TaskModel[] = [];
  done: TaskModel[] = [];

  drop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log(this.todo, this.inProgress, this.done);
    }
  }
}
