import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamesComponent} from './games/games.component';
import {PlayersComponent} from './players/players.component';
import {PlayerComponent} from './players/player/player.component';
import {GameComponent} from './games/game/game.component';
import {GameDayComponent} from './games/game-day/game-day.component';
import {StatsComponent} from './stats/stats.component';
import {StatsCardComponent} from './stats/stats-card/stats-card.component';


const routes: Routes = [
  {path: 'gamedays', component: GamesComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'stats', component: StatsComponent},
  {path: '', redirectTo: 'players', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const appRoutingComponents = [GamesComponent, GameDayComponent, GameComponent, PlayersComponent, PlayerComponent,
  StatsComponent, StatsCardComponent];


