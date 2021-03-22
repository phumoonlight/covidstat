import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodayStatRoutingModule } from './today-stat-routing.module'
import { TodayStatComponent } from './today-stat.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [TodayStatComponent],
  imports: [CommonModule, TodayStatRoutingModule, SharedModule],
})
export class TodayStatModule {}
