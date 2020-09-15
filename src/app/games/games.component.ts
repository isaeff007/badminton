import {Component} from '@angular/core';
import {GamedataService} from '../shared/gamedata.service';
import {games} from '../shared/data';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  gameDays$ = this.dataService.getGameDays();

  constructor(private dataService: GamedataService) {
  }

  addGameDays() {
    games.forEach(gameDay => this.dataService.createGameDay(gameDay));
  }

}
