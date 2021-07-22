import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { TimelineStat } from 'src/types/timeline-stat.type'

interface TimelineStatResponse {
  UpdateDate?: string
  Source?: string
  DevBy?: string
  SeverBy?: string
  Data?: {
    Date?: string
    NewConfirmed?: number
    NewRecovered?: number
    NewHospitalized?: number
    NewDeaths?: number
    Confirmed?: number
    Recovered?: number
    Hospitalized?: number
    Deaths?: number
  }[]
}

@Injectable()
export class TimelineStatService {
  private readonly ENDPOINT = '/json/covid19v2/getTimeline.json'

  constructor(private http: HttpClient) {}

  async getStat(): Promise<TimelineStat[] | null> {
    try {
      const response$ = this.http.get<TimelineStatResponse>(this.ENDPOINT)
      const response = await response$.toPromise()
      return this.mapData(response)
    } catch {
      return null
    }
  }

  private mapData(response: TimelineStatResponse): TimelineStat[] {
    const mappedData = response?.Data?.map<TimelineStat>((data) => ({
      date: data.Date,
      confirmed: data.Confirmed,
      hospitalized: data.Hospitalized,
      recovered: data.Recovered,
      deaths: data.Deaths,
    }))
    return mappedData || []
  }
}
