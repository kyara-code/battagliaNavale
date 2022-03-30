import { HitManuallyComponent } from './hit-manually/hit-manually.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SingleCellComponent } from './single-cell/single-cell.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { HeaderComponent } from './header/header.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleCellComponent,
    ShipListComponent,
    HitManuallyComponent,
    HeaderComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
