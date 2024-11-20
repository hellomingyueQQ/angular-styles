import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav.component'
import { LevelOneComponent } from "./components/level-one/level-one.component";
import { LevelThreeComponent } from "./components/level-three/level-three.component";
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [BrowserModule, LevelOneComponent, LevelThreeComponent, ButtonModule],
  declarations: [
    AppComponent,
    AppNavComponent,

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }