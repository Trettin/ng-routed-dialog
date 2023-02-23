import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-sample',
  templateUrl: './dialog-sample.component.html',
  styleUrls: ['./dialog-sample.component.scss']
})
export class DialogSampleComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log('Injected Data: ', {data})
  }
}
