import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { TodayStat } from 'src/types/today-stat.type'

interface TodayStatResponse {
  Confirmed?: number
  Deaths?: number
  DevBy?: string
  Hospitalized?: number
  NewConfirmed?: number
  NewDeaths?: number
  NewHospitalized?: number
  NewRecovered?: number
  Recovered?: number
  SeverBy?: string
  Source?: string
  UpdateDate?: string
}

@Injectable()
export class TodayStatService {
  private readonly ENDPOINT = '/api/open/today'

  constructor(private http: HttpClient) {}

  async getStat(): Promise<TodayStat> {
    let response: TodayStatResponse = {}
    try {
      const response$ = this.http.get<TodayStatResponse>(this.ENDPOINT)
      response = await response$.toPromise()
    } catch {}
    return {
      confirmedCount: response.Confirmed ?? 0,
      deathCount: response.Deaths ?? 0,
      hospitalizedCount: response.Hospitalized ?? 0,
      recoveredCount: response.Recovered ?? 0,
      newConfirmedCount: response.NewConfirmed ?? 0,
      newDeathCount: response.NewDeaths ?? 0,
      newHospitalizedCount: response.NewHospitalized ?? 0,
      newRecoveredCount: response.NewRecovered ?? 0,
    }
  }
}
