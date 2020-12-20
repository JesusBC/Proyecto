import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,

    children: [
      {
        path: '',
        loadChildren: () => import('../admin/home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'catalogo',
        loadChildren: () => import('../admin/catalogo/catalogo.module').then(m => m.CatalogoPageModule),
      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
