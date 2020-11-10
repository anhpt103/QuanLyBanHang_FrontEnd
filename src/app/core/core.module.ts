import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PageErrorComponent,
    ContentWrapperComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule],
  exports: [ContentWrapperComponent],
})
export class CoreModule {}
