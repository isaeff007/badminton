import {Component, Input, OnInit} from '@angular/core';
import {GameDay} from '../../models/game';

@Component({
  selector: 'app-game-day',
  templateUrl: './game-day.component.html',
  styleUrls: ['./game-day.component.css']
})
export class GameDayComponent implements OnInit {

  @Input() gameDay: GameDay;
  result = {winnerId: '', winnerPoints: 0, looserId: '', looserPoints: 0};


  constructor() {
  }

  ngOnInit(): void {
    const [player1, player2] = [this.gameDay.games[0].winner.playerId, this.gameDay.games[0].looser.playerId];

    const player1wins = this.gameDay.games.filter(game => game.winner.playerId === player1).length;
    const player2wins = this.gameDay.games.length - player1wins;
    this.result.winnerId = player1wins > player2wins ? player1 : player2;
    this.result.winnerPoints = player1wins > player2wins ? player1wins : player2wins;
    this.result.looserId = player1wins > player2wins ? player2 : player1;
    this.result.looserPoints = player1wins > player2wins ? player2wins : player1wins;
  }


}
