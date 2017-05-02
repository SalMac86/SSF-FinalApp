import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Rules } from './rules';

@NgModule({
  declarations: [
    Rules,
  ],
  imports: [
    IonicPageModule.forChild(Rules),
  ],
  exports: [
    Rules
  ]
})
export class RulesModule {}
