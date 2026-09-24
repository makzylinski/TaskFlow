import { Service } from '@angular/core';

export interface BoardColumn {
  id: number;
  name: string;
}

@Service()
export class ColumnService {}
