import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGE_URL } from 'src/app/core/constants/page-url';
import { CategoryComponent } from './category.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      {
        path: '',
        component: CategoryComponent,
      },
      {
        path: PAGE_URL.CATEGORY_PRODUCT,
        component: ProductListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
