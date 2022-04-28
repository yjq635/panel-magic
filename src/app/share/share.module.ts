import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NzModalModule } from 'ng-zorro-antd/modal';
import {NzPopoverModule} from "ng-zorro-antd/popover";
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { PipesModule } from "@ng-public/pipe/pipe.module";
import { NgThumbAutoModule } from "@ng-public/ng-thumb-auto";
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import { NzSelectModule } from 'ng-zorro-antd/select';

// share 模版一般用于一些通用模块和功能的再次导出，这些模块和功能在应用中到处可用到，减少引入成本
@NgModule({
    imports: [CommonModule,
        NzPopoverModule,
        NzModalModule,
        NzDrawerModule,
        NzSpinModule,
        NzUploadModule,
        NzGridModule,
        NzButtonModule,
        NzCollapseModule,
        NzStepsModule,
        NzTabsModule,
        NzInputNumberModule,
        NzDividerModule,
        NzDropDownModule,
        NzTagModule,
        NzSliderModule,
        NzSelectModule,
    ],
    exports: [CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NzPopoverModule,
        PipesModule,
        NgThumbAutoModule,
        NzModalModule,
        NzDrawerModule,
        NzSpinModule,
        NzUploadModule,
        NzGridModule,
        NzButtonModule,
        NzCollapseModule,
        NzStepsModule,
        NzTabsModule,
        NzInputNumberModule,
        NzDividerModule,
        NzDropDownModule,
        NzTagModule,
        NzSliderModule,
        NzSelectModule,
    ],
})
export class ShareModule {}

