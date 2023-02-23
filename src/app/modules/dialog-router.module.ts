import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogResolverService } from '../services/dialog-resolver.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    DialogResolverService,
  ]
})
export class DialogRouterModule { }