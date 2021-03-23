import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodayStatService } from './services/today-stat.service'
import { TimelineStatService } from './services/timeline-stat.service'
import { HeaderComponent } from './components/header/header.component'
import { NewStatCountPipe } from './pipes/new-stat-count.pipe'

@NgModule({
  declarations: [HeaderComponent, NewStatCountPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, NewStatCountPipe],
  providers: [TodayStatService, TimelineStatService],
})
export class SharedModule {}
