import { Service } from '@angular/core';

@Service()
export class ColumnService {
  private columns: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'To Do',
    },
    {
      id: 2,
      name: 'In Progress',
    },
    {
      id: 3,
      name: 'Review',
    },
    {
      id: 4,
      name: 'Done',
    },
  ];

  getColumns = () => this.columns;
}
