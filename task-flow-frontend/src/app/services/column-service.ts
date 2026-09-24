import { Service } from '@angular/core';

export interface BoardColumn {
  id: number;
  name: string;
}

@Service()
export class ColumnService {
  private columns: BoardColumn[] = [
    { id: 1, name: 'To Do' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Review' },
    { id: 4, name: 'Done' },
  ];

  getColumns = () => this.columns;
}
