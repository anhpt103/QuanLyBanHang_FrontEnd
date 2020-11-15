import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentWrapperComponent } from './core/components/content-wrapper/content-wrapper.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PAGE_URL } from './core/constants/page-url';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: PAGE_URL.ROOT,
    //canActivate: [AuthGuard],
    pathMatch: 'full',
    redirectTo: PAGE_URL.LOGIN,
  },
  {
    path: PAGE_URL.LOGIN,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    //canActivate: [AuthGuard],
    component: ContentWrapperComponent,
    children: [
      {
        path: PAGE_URL.HOME,
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: PAGE_URL.DASHBOARD,
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: PAGE_URL.CATEGORY,
        loadChildren: () =>
          import('./pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
    ],
  },
  {
    path: PAGE_URL.HTTP_ERROR_500,
    component: PageErrorComponent,
  },
  {
    path: PAGE_URL.ALL,
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
