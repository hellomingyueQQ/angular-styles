import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { AppComponent }    from './app.component';
import { AppNavComponent } from './app-nav.component'
import { LevelOneComponent } from "./components/level-one/level-one.component";

@NgModule({
  imports: [BrowserModule, LevelOneComponent],
  declarations: [ 
      AppComponent,
      AppNavComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }