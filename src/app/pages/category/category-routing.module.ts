import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGE_URL } from 'src/app/core/constants/page-url';

const routes: Routes = [
  {
    path: PAGE_URL.CATEGORY_PRODUCT,
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: PAGE_URL.CATEGORY_ROOM,
    loadChildren: () =>
      import('./pages/room/room.module').then((m) => m.RoomModule),
  },
  {
    path: PAGE_URL.CATEGORY_SUPPLIER,
    loadChildren: () =>
      import('./pages/supplier/supplier.module').then((m) => m.SupplierModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
