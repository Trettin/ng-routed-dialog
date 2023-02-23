import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogResolverService } from '../services/dialog-resolver.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  data = {
    name: 'Gabriel'
  }
  
  constructor(private dialogSvc: DialogResolverService ) {
  }

  navigate(path: string, data?: any) {
    this.dialogSvc.customNavigation(path, data)
  }

}
