import {Component, OnInit} from '@angular/core';
import {GameDay} from '../models/game';
import {GamedataService} from '../shared/gamedata.service';
import {games} from '../shared/data';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gameDays: GameDay[];

  constructor(private dataService: GamedataService) {
  }

  ngOnInit(): void {
    this.dataService.getGameDays().subscribe(data => {
      this.gameDays = data.map(e => {
        return e.payload.doc.data() as GameDay;
      });
    });
    // this.gameDays = this.dataService.getGameDays();
  }

  addGameDays() {
    games.forEach(gameDay => this.dataService.createGameDay(gameDay));
  }

}
