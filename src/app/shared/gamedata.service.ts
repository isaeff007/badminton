import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Player} from '../models/player';
import {players} from './data';
import {GameDay} from '../models/game';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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
    return this.firestore.collection(Collection.GAMEDAYS).snapshotChanges()
      .pipe(
        map(dca =>
          dca.map(e => e.payload.doc.data() as GameDay)
            .sort(this.compareByDate),
        )
      );
    // return games;
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

}
