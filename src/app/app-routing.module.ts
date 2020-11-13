import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PAGE_URL } from './core/constants/page-url';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    //canActivate: [AuthGuard],
    pathMatch: 'full',
    redirectTo: PAGE_URL.LOGIN,
  },
  {
    path: 'welcome',
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: PAGE_URL.LOGIN,
    loadChildren: () =>
      import('../app/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '500',
    component: PageErrorComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
