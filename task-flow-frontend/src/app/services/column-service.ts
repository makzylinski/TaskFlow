import { Service } from '@angular/core';

export interface BoardColumn {
  id: number;
  name: string;
  tasks: string[];
}

@Service()
export class ColumnService {
  private columns: BoardColumn[] = [
    { id: 1, name: 'To Do', tasks: ['Get to work', 'Pick up groceries'] },
    { id: 2, name: 'In Progress', tasks: ['Go home'] },
    { id: 3, name: 'Review', tasks: ['Test'] },
    { id: 4, name: 'Done', tasks: ['Get up', 'Brush teeth'] },
  ];

  getColumns = () => this.columns;
}
