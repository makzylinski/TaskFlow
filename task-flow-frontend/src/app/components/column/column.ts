import { Component, inject, OnInit } from '@angular/core';
import { ColumnService } from '../../services/column-service';

@Component({
  imports: [],
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
}
