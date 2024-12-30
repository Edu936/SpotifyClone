import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerRouter } from './player.routes';

// Components 
import { PlayerComponent } from './player.component';
import { ButtonMenuComponent } from 'src/app/components/button-menu/button-menu.component';
import { PainelEsquerdoComponent } from 'src/app/components/painel-esquerdo/painel-esquerdo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PlayerComponent,
    ButtonMenuComponent,
    PainelEsquerdoComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
    RouterModule.forChild(PlayerRouter),
  ],
})
export class PlayerModule {}
