import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, input, output } from '@angular/core';
import { Task, TaskModel } from '../task/task';

@Component({
  selector: 'app-column',
  imports: [Task, CdkDropList, CdkDrag],
  styleUrl: './column.scss',
  templateUrl: './column.html',
})
export class Column {
  title = input.required<string>();
  tasks = input.required<TaskModel[]>();
  dropped = output<CdkDragDrop<TaskModel[]>>();
  taskSelected = output<TaskModel>();
}
