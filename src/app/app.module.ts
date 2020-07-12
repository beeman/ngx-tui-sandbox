import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TuiModule } from 'ngx-tui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TuiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
