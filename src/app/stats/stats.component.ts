import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GameDay, PlayerPoints, PlayerWins} from '../models/game';
import {GamedataService} from '../shared/gamedata.service';
import {Pls} from '../shared/data';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  playerIds = Pls;
  winnerFW$: Observable<PlayerWins>;
  winnerFK$: Observable<PlayerWins>;
  playerPointsFW$: Observable<PlayerPoints>;
  playerPointsFK$: Observable<PlayerPoints>;

  gameDays$ = this.dataService.getGameDays().pipe(
    map(gameDays => gameDays.sort(this.compareByDateDesc))
  );

  constructor(private dataService: GamedataService) {
  }

  private compareByDateDesc(gameDay1: GameDay, gameDay2: GameDay): number {
    if (gameDay1.date < gameDay2.date) {
      return 1;
    }
    if (gameDay1.date > gameDay2.date) {
      return -1;
    }
    return 0;
  }

  ngOnInit(): void {
    this.winnerFW$ = this.dataService.getUserWins(Pls.FW);
    this.winnerFK$ = this.dataService.getUserWins(Pls.FK);
    this.playerPointsFW$ = this.dataService.getUserPoints(Pls.FW);
    this.playerPointsFK$ = this.dataService.getUserPoints(Pls.FK);
  }

}
