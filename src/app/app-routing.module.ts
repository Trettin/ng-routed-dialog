import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogRouterModule } from './services/dialog-router.module';
import { DialogResolverService } from './services/dialog-resolver.service';
import { DialogSampleComponent } from './dialog-sample/dialog-sample.component';
import { AppComponent } from './app.component';
import { DialogRouteConfig } from './services/models/dialog-route-config.model';
import { RegularComponent } from './regular/regular.component';
import { MenuComponent } from './menu/menu.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {
    component: MenuComponent,
    path: '',
    children: [
      {
        resolve: { dlgRef: DialogResolverService },
        path: '0',
        component: DialogSampleComponent,
        
      },
      {
        resolve: { dlgRef: DialogResolverService },
        path: '1',
        component: DialogSampleComponent,
        data: {
          dlg: {
            data: { name: 'Sample Dialog 1' },
            position: { left: '0' },
            redirectPath: [''],
            width: '500px',
          } as DialogRouteConfig,
        },
      },
    ]
  },
  
  {
    path: 'regular',
    component: RegularComponent
  
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    DialogRouterModule,
  ],
  exports: [
    RouterModule,
    DialogRouterModule,
  ]
})

export class AppRoutingModule { }
