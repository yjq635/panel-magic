import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { MgrThumbAutoComponent } from "./ng-thumb-auto.component";

@NgModule({
    imports: [CommonModule],
    declarations: [MgrThumbAutoComponent],
    exports: [MgrThumbAutoComponent],
})
export class NgThumbAutoModule {}
