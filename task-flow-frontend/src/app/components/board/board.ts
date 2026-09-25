import { CdkDragDrop, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskStatus } from '../../enum/task-status.enum';
import { TaskService } from '../../services/task-service';
import { Column } from '../column/column';
import { TaskDetail } from '../task-detail/task-detail';
import { NewTask, TaskModal } from '../task-modal/task-modal';
import { TaskModel } from '../task/task';

@Component({
  selector: 'app-board',
  imports: [CdkDropListGroup, Column, TaskModal, TaskDetail],
  styleUrl: './board.scss',
  templateUrl: './board.html',
})
export class Board implements OnInit {
  private taskService = inject(TaskService);
  private cdr = inject(ChangeDetectorRef);

  readonly TaskStatus = TaskStatus;

  boardId = Number(inject(ActivatedRoute).snapshot.paramMap.get('id'));

  private tasks = signal<TaskModel[]>([]);

  private byStatus = (status: TaskStatus) =>
    computed(() => this.tasks().filter((t) => t.status === status));

  todo = this.byStatus(TaskStatus.TO_DO);
  inProgress = this.byStatus(TaskStatus.IN_PROGRESS);
  review = this.byStatus(TaskStatus.REVIEW);
  done = this.byStatus(TaskStatus.DONE);

  modalOpen = signal(false);
  selectedTask = signal<TaskModel | null>(null);

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks() {
    this.taskService.getTasks(this.boardId).subscribe((tasks) => this.tasks.set(tasks));
  }

  addTask(_newTask: NewTask) {
    this.modalOpen.set(false);
    this.loadTasks();
  }

  drop(event: CdkDragDrop<TaskModel[]>, column: TaskStatus) {
    const task: TaskModel = event.item.data;
    if (task.status === column) return;

    this.tasks.update((list) => list.map((t) => (t.id === task.id ? { ...t, status: column } : t)));
    this.cdr.detectChanges();

    this.taskService.updateTaskStatus(task.id, column).subscribe({
      error: () => this.loadTasks(),
    });
  }
}
