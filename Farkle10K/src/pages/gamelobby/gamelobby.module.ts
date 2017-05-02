import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gamelobby } from './gamelobby';

@NgModule({
  declarations: [
    Gamelobby,
  ],
  imports: [
    IonicPageModule.forChild(Gamelobby),
  ],
  exports: [
    Gamelobby
  ]
})
export class GamelobbyModule {}
