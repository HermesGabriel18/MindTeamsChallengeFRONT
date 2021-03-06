import { Routes } from '@angular/router';
import { Privileges } from '@auth/models';
import { MindTeamsRoutes } from '@core/models';
import { NgxPermissionsGuard } from 'ngx-permissions';

const error = MindTeamsRoutes.dashboard;

export const PagesRoutes: Routes = [
  {
    path: MindTeamsRoutes.dashboard,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Privileges.DASHBOARD],
        redirectTo: error,
      },
    },
  },
  {
    path: MindTeamsRoutes.profile,
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: MindTeamsRoutes.users,
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Privileges.USERS],
        redirectTo: error,
      },
    },
  },
  {
    path: MindTeamsRoutes.clients,
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Privileges.CLIENTS],
        redirectTo: error,
      },
    },
  },
  {
    path: MindTeamsRoutes.projects,
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Privileges.PROJECTS],
        redirectTo: error,
      },
    },
  },
  {
    path: MindTeamsRoutes.transactions,
    loadChildren: () =>
      import('./transactions/transactions.module').then(
        (m) => m.TransactionsModule
      ),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: [Privileges.TRANSACTIONS],
        redirectTo: error,
      },
    },
  },
];
