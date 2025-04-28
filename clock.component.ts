import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  templateUrl: './clock.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time = new Date();

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
