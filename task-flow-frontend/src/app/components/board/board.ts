import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-board',
  styleUrl: './board.scss',
  templateUrl: './board.html',
})
export class Board implements OnInit {
  ngOnInit(): void {
    console.log('working...');
  }
}
