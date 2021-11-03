import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Player} from '../models/player';
import {games, players} from './data';
import {Game, GameDay, PlayerPoints, PlayerWins} from '../models/game';
import {Observable, of} from 'rxjs';

export enum Collection {
  PLAYERS = 'players',
  GAMEDAYS = 'gamedays'
}

@Injectable({
  providedIn: 'root'
})
export class GamedataService {


  constructor(private firestore: AngularFirestore) {
  }

  getPlayers() {
    return this.firestore.collection('players').snapshotChanges();
    // return players;
  }

  createPlayer(player: Player) {
    return this.firestore.collection(Collection.PLAYERS).add(player);
  }

  // convert the firebase collection to expected game day array sorted by date
  getGameDays(): Observable<GameDay[]> {
    // return this.firestore.collection(Collection.GAMEDAYS).snapshotChanges()
    //   .pipe(
    //     map(dca =>
    //       dca.map(e => e.payload.doc.data() as GameDay)
    //         .sort(this.compareByDate),
    //     )
    //   );
    // to display without delay on mobile devices
    return of(games.sort(this.compareByDate));
  }

  private compareByDate(gameDay1: GameDay, gameDay2: GameDay): number {
    if (gameDay1.date < gameDay2.date) {
      return -1;
    }
    if (gameDay1.date > gameDay2.date) {
      return 1;
    }
    return 0;
  }

  createGameDay(gameDay: GameDay) {
    return this.firestore.collection(Collection.GAMEDAYS).add(gameDay);
  }

  getUserWins(userId: string): Observable<PlayerWins> {
    let wins = 0;
    games.forEach(gameDay => {
      wins += gameDay.games.filter(game => game.winner.playerId === userId).length;
    });
    console.log(userId, wins);
    return of({playerId: userId, playerWins: wins});
  }

  getUserDaysWon(userId: string): Observable<PlayerWins> {
   let daysWon = 0;
   games.forEach(gameDay => {
      let dayWins = 0;
      let dayLost = 0;
      dayWins += gameDay.games.filter(game => game.winner.playerId === userId).length;
      dayLost += gameDay.games.filter(game => game.looser.playerId === userId).length;
      // draw counted as a win
      if (dayWins >= dayLost) {
        daysWon ++;
      }
    });
   return of({playerId: userId, playerWins: daysWon});

  }


  getGameDayResult(gameDay: GameDay): PlayerWins[] {
    const [p1, p2] = [gameDay.games[0].winner.playerId, gameDay.games[0].looser.playerId];
    const p1Wins = gameDay.games.filter(game => game.winner.playerId === p1).length;
    const p2Wins = gameDay.games.filter(game => game.winner.playerId === p2).length;
    return ([{playerId: p1, playerWins: p1Wins}, {playerId: p2, playerWins: p2Wins}]);
  }

  // get all points for player
  getUserPoints(userId: string): Observable<PlayerPoints> {
    const winnerPoints = this.getUserPointsByType(userId, 'winner');
    const looserPoints = this.getUserPointsByType(userId, 'looser');
    const allPoints = winnerPoints + looserPoints;
    return of({winnerPoints, looserPoints, allPoints});
  }

  private getUserPointsByType(userId: string, pointType: 'winner' | 'looser'): number {
    let userPoints = 0;

    const sumPoints = (gamesToSum: Game[], key: string) => {
      return gamesToSum.reduce((prev, cur) => prev + cur[key].points, 0);
    };

    games.forEach(gameDay => {
      userPoints += sumPoints(gameDay.games.filter(game => game[pointType].playerId === userId), pointType);
    });

    return userPoints;
  }

}
