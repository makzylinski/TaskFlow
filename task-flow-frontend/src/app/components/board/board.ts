import {
  CdkDragDrop,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task-service';
import { separateTasksByStatus } from '../../utils/task-status';
import { Column } from '../column/column';
import { NewTask, TaskModal } from '../task-modal/task-modal';
import { TaskModel } from '../task/task';

@Component({
  selector: 'app-board',
  imports: [CdkDropListGroup, Column, TaskModal],
  styleUrl: './board.scss',
  templateUrl: './board.html',
})
export class Board implements OnInit {
  private taskService = inject(TaskService);

  boardId = Number(inject(ActivatedRoute).snapshot.paramMap.get('id'));

  todo = signal<TaskModel[]>([]);
  inProgress = signal<TaskModel[]>([]);
  review = signal<TaskModel[]>([]);
  done = signal<TaskModel[]>([]);

  modalOpen = signal(false);

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks() {
    this.taskService.getTasks(this.boardId).subscribe((tasks) => {
      const separatedTasks = separateTasksByStatus(tasks);

      this.todo.set(separatedTasks.todo);
      this.inProgress.set(separatedTasks.inProgress);
      this.review.set(separatedTasks.review);
      this.done.set(separatedTasks.done);
    });
  }

  addTask(_newTask: NewTask) {
    this.modalOpen.set(false);
    this.loadTasks();
  }

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
