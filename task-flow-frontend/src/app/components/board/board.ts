import { Component, OnInit } from '@angular/core';
import { Column } from '../column/column';

@Component({
  imports: [Column],
  selector: 'app-board',
  styleUrl: './board.scss',
  templateUrl: './board.html',
})
export class Board implements OnInit {
  ngOnInit(): void {
    console.log('working...');
  }
}
