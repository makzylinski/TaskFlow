import { DatePipe } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';

export interface TaskModel {
  id: number;
  type: string;
  name: string;
  title: string;
  person: string;
  description: string;
  status: string;
  dateCreated: Date;
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
