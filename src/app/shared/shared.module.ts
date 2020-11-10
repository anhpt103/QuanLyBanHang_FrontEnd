import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgZorroAntdModule, FormsModule, ReactiveFormsModule],
  exports: [NgZorroAntdModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
