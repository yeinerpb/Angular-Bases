import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';
import { DBZModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HeroesModules, 
    ContadorModule,
    DBZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
