import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { ColumnService } from '../../services/column-service';

@Component({
  imports: [DragDropModule],
  selector: 'app-column',
  styleUrl: './column.scss',
  templateUrl: './column.html',
})
export class Column implements OnInit {
  columns: { id: number; name: string }[] = [];

  columnService = inject(ColumnService);

  ngOnInit(): void {
    this.columns = this.columnService.getColumns();
  }

  drop(event: CdkDragDrop<{ id: number; name: string }[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
