import { DatePipe } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

export interface TaskModel {
  id: number;
  name: string;
  description: string;
  dateCreated: string;
  status: string;
  boardId: number | null;
  userId: number | null;
}

@Component({
  imports: [DatePipe],
  selector: 'app-task',
  styleUrl: './task.scss',
  templateUrl: './task.html',
})
export class Task implements OnInit {
  task = input.required<TaskModel>();

  ngOnInit(): void {
    console.log(this.task());
  }
}
