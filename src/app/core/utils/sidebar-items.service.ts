import { Injectable } from '@angular/core';
import { Privileges } from '@auth/models';
import { MindTeamsRoutes, RouteInfo } from '@core/models';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({ providedIn: 'root' })
export class SidebarItemsService {
  constructor(private _ngxPermissions: NgxPermissionsService) {}

  getSidebarItems(): RouteInfo[] {
    const sidebarMenu: RouteInfo[] = [
      {
        path: `/app/${MindTeamsRoutes.dashboard}`,
        title: 'Dashboard',
        icon: 'dashboard',
        class: '',
        hidden: this._ngxPermissions.getPermission(String(Privileges.DASHBOARD))
          ? false
          : true,
      },
      {
        path: `/app/${MindTeamsRoutes.users}`,
        title: 'Usuarios',
        icon: 'person',
        class: '',
        hidden: this._ngxPermissions.getPermission(String(Privileges.USERS))
          ? false
          : true,
      },
    ];
    return sidebarMenu;
  }
}