import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerRouter } from './player.routes';

// Components 
import { PlayerComponent } from './player.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { PaineEsquerdoComponent } from 'src/app/components/paine-esquerdo/paine-esquerdo.component';

@NgModule({
  declarations: [
    PlayerComponent,
    ButtonMenuComponent,
    PaineEsquerdoComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(PlayerRouter),
  ],
})
export class PlayerModule {}
