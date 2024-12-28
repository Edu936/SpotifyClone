import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRouter } from './player.routes';
import { PaineEsquerdoComponent } from 'src/app/components/paine-esquerdo/paine-esquerdo.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PaineEsquerdoComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(PlayerRouter),
  ],
})
export class PlayerModule {}
