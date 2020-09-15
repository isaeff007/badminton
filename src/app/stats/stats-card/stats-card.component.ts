import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PlayerPoints, PlayerWins} from '../../models/game';
import {GamedataService} from '../../shared/gamedata.service';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {

  @Input() playerId: string;


  numberOfWins$: Observable<PlayerWins>;

  playerPoints$: Observable<PlayerPoints>;


  constructor(private dataService: GamedataService) {
  }

  ngOnInit(): void {
    this.numberOfWins$ = this.dataService.getUserWins(this.playerId);
    this.playerPoints$ = this.dataService.getUserPoints(this.playerId);

  }

}
