import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Landaboutrules } from './landaboutrules';

@NgModule({
  declarations: [
    Landaboutrules,
  ],
  imports: [
    IonicPageModule.forChild(Landaboutrules),
  ],
  exports: [
    Landaboutrules
  ]
})
export class LandaboutrulesModule {}
