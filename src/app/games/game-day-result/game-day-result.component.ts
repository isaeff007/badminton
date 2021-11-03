import {Component, Input, OnInit} from '@angular/core';
import {GameDay, PlayerWins} from '../../models/game';
import {GamedataService} from '../../shared/gamedata.service';

@Component({
  selector: 'app-game-day-result',
  templateUrl: './game-day-result.component.html',
  styleUrls: ['../game-day/game-day.component.css']
})
export class GameDayResultComponent implements OnInit {
  @Input() gameDay: GameDay;

  result: PlayerWins[];

  constructor(private dataService: GamedataService) {
  }

  ngOnInit(): void {
    this.result = this.dataService.getGameDayResult(this.gameDay);
  }

}
