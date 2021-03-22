import { Component, OnInit } from '@angular/core'

import { TodayStatService } from '../shared/services/today-stat.service'
import { environment } from 'src/environments/environment'

interface TodayStat {
  confirmedCount: number | string
  deathCount: number | string
  hospitalizedCount: number | string
  recoveredCount: number | string
}

@Component({
  templateUrl: './today-stat.component.html',
  styleUrls: ['./today-stat.component.scss'],
})
export class TodayStatComponent implements OnInit {
  isLoading: boolean = true
  repoUrl: string = environment.repoUrl
  todayStat: TodayStat = {
    confirmedCount: 0,
    deathCount: 0,
    hospitalizedCount: 0,
    recoveredCount: 0,
  }

  constructor(private todayStatService: TodayStatService) {}

  async ngOnInit(): Promise<void> {
    const todayStat = await this.todayStatService.getStat()
    this.todayStat.confirmedCount = todayStat.confirmedCount
    this.todayStat.deathCount = todayStat.deathCount
    this.todayStat.hospitalizedCount = todayStat.hospitalizedCount
    this.todayStat.recoveredCount = todayStat.recoveredCount
  }
}
