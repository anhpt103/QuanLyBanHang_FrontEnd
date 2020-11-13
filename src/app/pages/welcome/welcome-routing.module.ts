import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGE_URL } from 'src/app/core/constants/page-url';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: PAGE_URL.CATEGORIES,
        loadChildren: () =>
          import('../../pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
