import {Component, isDevMode} from '@angular/core';
import {GamedataService} from '../shared/gamedata.service';
import {Pls} from '../shared/data';
import {GameType} from '../models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  gameDays$ = this.dataService.getGameDays();

  constructor(private dataService: GamedataService) {
  }

  isDevModeAk(): boolean {
    return isDevMode();
  }

  addGameDays() {
    const lastGames = [ {
      date: '2021.08.29',
      games: [
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
        {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 14}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
        {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 11}, looser: {playerId: Pls.FW, points: 3}},
      ]
    },
      {
        date: '2021.09.05',
        games: [
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 13}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 15}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 22}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 15}},
        ]
      },
      {
        date: '2021.09.11',
        games: [
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 5}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
        ]
      },
      {
        date: '2021.09.19',
        games: [
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
        ]
      },
      {
        date: '2021.09.25',
        games: [
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 9}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 11}, looser: {playerId: Pls.FK, points: 5}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
        ]
      },
      {
        date: '2021.10.02',
        games: [
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 16}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 13}},
        ]
      },
      {
        date: '2021.11.01',
        games: [
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 10}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 22}, looser: {playerId: Pls.FK, points: 20}},
          {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 14}},
          {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 22}, looser: {playerId: Pls.FW, points: 20}},
        ]
      }];

    // games.forEach(gameDay => this.dataService.createGameDay(gameDay));
    lastGames.forEach(gameDay => this.dataService.createGameDay(gameDay));
  }
}
