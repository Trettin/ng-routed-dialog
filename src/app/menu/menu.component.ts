import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  data = {
    name: 'Gabriel'
  }
  
  constructor(private router: Router ) {
  }

  navigate() {
    this.router.navigate(['/0'], {state: {data: {dlg: {data: this.data}}}})
  }

}
