import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, HttpModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { About } from '../about/about';
import { Game } from '../game/game';
import { Gamelobby } from '../gamelobby/gamelobby';
import { Landaboutrules } from '../landaboutrules/landaboutrules';
import { Landing } from '../pages/landing/landing';
import { Leaderboard } from '../leaderboard/leaderboard';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { Rules } from '../rules/rules';

let injections = [
  MyApp,
  About,
  Game,
  Gamelobby,
  Landaboutrules,
  Landing,
  Leaderboard,
  Login,
  Register,
  Rules
  ];

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
