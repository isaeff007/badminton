import {Component, OnInit} from '@angular/core';
import {GameDay} from '../models/game';
import {GamedataService} from '../shared/gamedata.service';
import {games} from '../shared/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameDays$: Observable<GameDay[]>;

  constructor(private dataService: GamedataService) {
  }

  ngOnInit(): void {
    this.gameDays$ = this.dataService.getGameDays();
    // this.gameDays = this.dataService.getGameDays();
  }

  addGameDays() {
    games.forEach(gameDay => this.dataService.createGameDay(gameDay));
  }

}
