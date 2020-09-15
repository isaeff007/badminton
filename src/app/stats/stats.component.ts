import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PlayerPoints, PlayerWins} from '../models/game';
import {GamedataService} from '../shared/gamedata.service';
import {Pls} from '../shared/data';

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


  constructor(private dataService: GamedataService) {
  }

  ngOnInit(): void {
    this.winnerFW$ = this.dataService.getUserWins(Pls.FW);
    this.winnerFK$ = this.dataService.getUserWins(Pls.FK);
    this.playerPointsFW$ = this.dataService.getUserPoints(Pls.FW);
    this.playerPointsFK$ = this.dataService.getUserPoints(Pls.FK);
  }

}
