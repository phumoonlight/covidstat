import { Component, OnInit } from '@angular/core'

import { TodayStatService } from '../shared/services/today-stat.service'
import { TimelineStatService } from '../shared/services/timeline-stat.service'
import { environment } from 'src/environments/environment'
import { TodayStat } from 'src/types/today-stat.type'

interface GraphData {
  name: string
  series: {
    name: string
    value: number
  }[]
}

const INITIAL_GRAPH_DATA: GraphData[] = [
  {
    name: '',
    series: [
      {
        name: 'loading',
        value: 0,
      },
    ],
  },
]

@Component({
  templateUrl: './today-stat.component.html',
  styleUrls: ['./today-stat.component.scss'],
})
export class TodayStatComponent implements OnInit {
  isLoading: boolean = true
  repoUrl: string = environment.repoUrl
  confirmedGraphData: GraphData[] = INITIAL_GRAPH_DATA
  hospitalizedGraphData: GraphData[] = INITIAL_GRAPH_DATA
  recoveredGraphData: GraphData[] = INITIAL_GRAPH_DATA
  deathGraphData: GraphData[] = INITIAL_GRAPH_DATA
  todayStat: TodayStat = {
    confirmedCount: 0,
    deathCount: 0,
    hospitalizedCount: 0,
    recoveredCount: 0,
    newConfirmedCount: 0,
    newDeathCount: 0,
    newHospitalizedCount: 0,
    newRecoveredCount: 0,
  }

  constructor(
    private todayStatService: TodayStatService,
    private timelineStatService: TimelineStatService
  ) {}

  async ngOnInit(): Promise<void> {
    const todayStat = await this.todayStatService.getStat()
    this.todayStat.confirmedCount = todayStat.confirmedCount
    this.todayStat.deathCount = todayStat.deathCount
    this.todayStat.hospitalizedCount = todayStat.hospitalizedCount
    this.todayStat.recoveredCount = todayStat.recoveredCount
    this.todayStat.newConfirmedCount = todayStat.newConfirmedCount
    this.todayStat.newDeathCount = todayStat.newDeathCount
    this.todayStat.newHospitalizedCount = todayStat.newHospitalizedCount
    this.todayStat.newRecoveredCount = todayStat.newRecoveredCount
    const timelineStatList = await this.timelineStatService.getStat()
    this.confirmedGraphData = [
      {
        name: '',
        series:
          timelineStatList?.map((a) => ({
            name: a.date ?? '',
            value: a.confirmed ?? 0,
          })) || [],
      },
    ]
    this.hospitalizedGraphData = [
      {
        name: '',
        series:
          timelineStatList?.map((a) => ({
            name: a.date ?? '',
            value: a.hospitalized ?? 0,
          })) || [],
      },
    ]
    this.recoveredGraphData = [
      {
        name: '',
        series:
          timelineStatList?.map((a) => ({
            name: a.date ?? '',
            value: a.recovered ?? 0,
          })) || [],
      },
    ]
    this.deathGraphData = [
      {
        name: '',
        series:
          timelineStatList?.map((a) => ({
            name: a.date ?? '',
            value: a.deaths ?? 0,
          })) || [],
      },
    ]
  }
}
