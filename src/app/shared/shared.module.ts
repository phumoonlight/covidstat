import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodayStatService } from './services/today-stat.service'
import { TimelineStatService } from './services/timeline-stat.service'
import { HeaderComponent } from './components/header/header.component'
import { NewStatCountPipe } from './pipes/new-stat-count.pipe'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [HeaderComponent, NewStatCountPipe, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, NewStatCountPipe, FooterComponent],
  providers: [TodayStatService, TimelineStatService],
})
export class SharedModule {}
