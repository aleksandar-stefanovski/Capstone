import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './order-details.component';
import { OrderDetailsRoutingModule } from './order-details.routing.module';

@NgModule({
    imports: [
        CommonModule,
        OrderDetailsRoutingModule
    ],
    declarations: [OrderDetailsComponent]
})

export class OrderDetailsModule { }
