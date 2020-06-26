import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Player} from '../models/player';
import {players} from './data';
import {GameDay} from '../models/game';

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

  getGameDays() {
    return this.firestore.collection(Collection.GAMEDAYS).snapshotChanges();
    // return games;
  }

  createGameDay(gameDay: GameDay) {
    return this.firestore.collection(Collection.GAMEDAYS).add(gameDay);
  }
}
