import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRouter } from './player.routes';

@NgModule({
  declarations: [
    PlayerComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(PlayerRouter),
  ],
})
export class PlayerModule {}
