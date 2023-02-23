import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router';
import { DialogResolverService } from '../services/dialog-resolver.service';

@Component({
  selector: 'app-dialog-sample',
  templateUrl: './dialog-sample.component.html',
  styleUrls: ['./dialog-sample.component.scss']
})
export class DialogSampleComponent {
  _data: any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogSvc: DialogResolverService
    ) {
      console.log('Injected Data: ', {data, dialogData: this.dialogSvc.getData()})
      if (!!this.dialogSvc.getData()) this._data = this.dialogSvc.getData();
  }
}
