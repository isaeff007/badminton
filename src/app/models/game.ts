export interface GameDay {
  date: string;
  games: Game[];
}

export interface Game {
  type: GameType;
  winner: GamePlayer;
  looser: GamePlayer;
}

export enum GameType {
  SINGLE,
  PAIR
}

export interface GamePlayer {
  playerId: string;
  points: number;
}

export interface PlayerWins {
  playerId: string;
  playerWins: number;
}

export interface PlayerPoints {
  winnerPoints: number;
  looserPoints: number;
  allPoints: number;
}


