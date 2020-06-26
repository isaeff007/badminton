import {Player} from '../models/player';
import {GameDay, GameType} from '../models/game';

export const players: Player[] =

  [
    {id: 'fw', name: 'FW', avatar: 'no'},
    {id: 'fk', name: 'FK', avatar: 'no'},
    {id: 'nk', name: 'Наташа', avatar: 'no'},
    {id: 'ak', name: 'Саша', avatar: 'no'},
    {id: 'ew', name: 'Эмма', avatar: 'no'},
    {id: 'ks', name: 'Костя', avatar: 'no'}
  ];

export const Pls = {
  AK: 'ak',
  NK: 'nk',
  EW: 'ew',
  KS: 'ks',
  FW: 'fw',
  FK: 'fk'
};


export const games: GameDay[] = [
  {
    date: '2020.06.11',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 19}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 24}, looser: {playerId: Pls.FK, points: 22}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 14}},
    ]
  },
  {
    date: '2020.06.13',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 11}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 17}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 16}},
    ]
  },
  {
    date: '2020.06.20',
    games: [
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 21}, looser: {playerId: Pls.FW, points: 12}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 25}, looser: {playerId: Pls.FK, points: 23}},
      {type: GameType.PAIR, winner: {playerId: Pls.FK, points: 25}, looser: {playerId: Pls.FW, points: 17}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 21}, looser: {playerId: Pls.FK, points: 18}},
      {type: GameType.PAIR, winner: {playerId: Pls.FW, points: 12}, looser: {playerId: Pls.FK, points: 10}},
    ]
  }

];
