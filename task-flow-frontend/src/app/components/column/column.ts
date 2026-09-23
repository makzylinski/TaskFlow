import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { BoardColumn, ColumnService } from '../../services/column-service';

@Component({
  imports: [DragDropModule],
  selector: 'app-column',
  styleUrl: './column.scss',
  templateUrl: './column.html',
})
export class Column implements OnInit {
  columns: BoardColumn[] = [];
  columnService = inject(ColumnService);

  ngOnInit(): void {
    this.columns = this.columnService.getColumns();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
