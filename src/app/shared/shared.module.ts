import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodayStatService } from './services/today-stat.service'
import { TimelineStatService } from './services/timeline-stat.service'
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
  providers: [TodayStatService, TimelineStatService],
})
export class SharedModule {}
