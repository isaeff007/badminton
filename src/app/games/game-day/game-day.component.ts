import {Component, Input, OnInit} from '@angular/core';
import {Game, GameDay} from '../../models/game';

@Component({
  selector: 'app-game-day',
  templateUrl: './game-day.component.html',
  styleUrls: ['./game-day.component.css']
})
export class GameDayComponent implements OnInit {

  @Input() gameDay: GameDay;
  resultGame: Game;

  constructor() {
  }

  ngOnInit(): void {
    this.resultGame = this.getGameDayResult();
  }

  private getGameDayResult(): Game {
    const resultGame: Game = this.gameDay.games[0];
    resultGame.winner.playerId = this.gameDay.games[0].winner.playerId;
    resultGame.looser.playerId = this.gameDay.games[0].looser.playerId;
    resultGame.winner.points = this.gameDay.games.filter(game => game.winner.playerId === resultGame.winner.playerId).length;
    resultGame.looser.points = this.gameDay.games.filter(game => game.looser.playerId === resultGame.looser.playerId).length;
    return resultGame;
  }

}
