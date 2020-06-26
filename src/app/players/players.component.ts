import {Component, OnInit} from '@angular/core';
import {GamedataService} from '../shared/gamedata.service';
import {Player} from '../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[];

  constructor(private dataService: GamedataService) {
  }

  ngOnInit(): void {
    this.dataService.getPlayers().subscribe(data => {
      this.players = data.map(e => {
        return e.payload.doc.data() as Player;
      });
    });
    // this.players = this.dataService.getPlayers();
  }

  addPlayer() {
    const p1: Player = {id: 'fw', name: 'FW', avatar: 'no'};
    const p2: Player = {id: 'fk', name: 'FK', avatar: 'no'};
    this.dataService.createPlayer(p1);
    this.dataService.createPlayer(p2);
  }

}
