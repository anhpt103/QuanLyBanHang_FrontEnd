import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NzPageHeaderModule,
    NzAvatarModule,
    NzMenuModule,
    NzResultModule,
    NzButtonModule,
    NzLayoutModule,
    NzCollapseModule,
    NzSliderModule,
    NzIconModule,
    NzMessageModule,
    NzAlertModule,
    NzFormModule,
    NzSwitchModule,
    NzInputModule,
    NzDrawerModule,
  ],
})
export class NgZorroAntdModule {}
