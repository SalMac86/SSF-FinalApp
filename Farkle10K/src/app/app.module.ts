import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { About } from '../pages/about/about';
import { Game } from '../pages/game/game';
import { Gamelobby } from '../pages/gamelobby/gamelobby';
import { Landaboutrules } from '../pages/landaboutrules/landaboutrules';
import { Landing } from '../pages/landing/landing';
import { Leaderboard } from '../pages/leaderboard/leaderboard';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Rules } from '../pages/rules/rules';

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
