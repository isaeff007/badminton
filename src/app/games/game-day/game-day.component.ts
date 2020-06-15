import {Component, Input, OnInit} from '@angular/core';
import {GameDay} from '../../models/game';

@Component({
  selector: 'app-game-day',
  templateUrl: './game-day.component.html',
  styleUrls: ['./game-day.component.css']
})
export class GameDayComponent implements OnInit {

  @Input() gameDay: GameDay;
  constructor() { }

  ngOnInit(): void {
  }

}
