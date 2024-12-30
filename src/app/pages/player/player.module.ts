import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerRouter } from './player.routes';

// Components 
import { PlayerComponent } from './player.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { PaineEsquerdoComponent } from 'src/app/components/paine-esquerdo/paine-esquerdo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
    ButtonMenuComponent,
    PaineEsquerdoComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
    RouterModule.forChild(PlayerRouter),
  ],
})
export class PlayerModule {}
