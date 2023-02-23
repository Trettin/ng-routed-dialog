import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tap, takeUntil, take, mapTo, map } from 'rxjs/operators';
import { DialogRouteConfig } from './models/dialog-route-config.model';

@Injectable()
export class DialogResolverService implements Resolve<MatDialogRef<any>> {
    //@ts-ignore
  dialogRef: MatDialogRef<any>;

  private data: any;

  constructor(
    public dialog: MatDialog, 
    public router: Router,
    public location: Location
  ) { }

  resolve(nextRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
    const defaultRedirect = this.location.path() === routerState.url ? '' : this.location.path()

    const { data } = nextRoute;

    console.log({
        root: routerState, 
        nextRoute, 
        router: this.router, 
        defaultRedirect,
        data,
        fromNavigation: this.data
    })                                                                                             
    const cfg: DialogRouteConfig = (data && data['dlg']) || { redirectPath: [defaultRedirect], replaceUrl: false };
    const {redirectPath, replaceUrl} = cfg;
    
    const navigateAfterClose = redirectPath || routerState.url.split('/').filter(p => !nextRoute.url.map(u => u.path).includes(p) && p !== '');

    this.dialogRef = this.dialog.open(nextRoute.routeConfig?.component!, { ...cfg, closeOnNavigation: true });
    this.dialogRef.afterClosed().pipe(
    tap(() => {
      this.data = undefined;
      this.router.navigate(navigateAfterClose, {replaceUrl})
    }),
    take(1),
    ).subscribe();

    return this.dialogRef
    .afterOpened()
    .pipe(
      mapTo(this.dialogRef),
      takeUntil(this.dialogRef.afterClosed()),
    );
  }

  public customNavigation(path: string, data?: any) {
    this.data = data;
    this.router.navigate([path], {state: data})
  }

  public getData() {
    return this.data;
  }
}