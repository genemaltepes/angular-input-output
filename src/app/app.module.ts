import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StockStatusComponent } from './stockstatus.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StockStatusComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
