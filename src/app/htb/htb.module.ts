import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtbRoutingModule } from './htb-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HtbComponent } from './htb.component';


@NgModule({
  declarations: [HtbComponent],
  imports: [
    CommonModule,
    HtbRoutingModule,
    SharedModule
  ]
})
export class HtbModule { }
