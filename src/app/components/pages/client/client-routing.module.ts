import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client.component';
import {ClientPermissionsGuard} from '../../../guard/client-permissions.guard';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    // canActivate: [ClientPermissionsGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'dispositivos',
        loadChildren: () => import('./dispositivos/dispositivos.module').then(m => m.DispositivosPageModule),
      },
      {
        path: 'armas',
        loadChildren: () => import('./armas/armas.module').then(m => m.ArmasPageModule),
      },
      {
        path: 'contacto',
        loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoPageModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
