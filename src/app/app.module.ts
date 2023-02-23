import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { RegularComponent } from './regular/regular.component';
import { DialogRouterComponent } from './services/dialog-router.component';
import { MenuComponent } from './menu/menu.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogSampleComponent,
    RegularComponent,
    MenuComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
