import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ApiService {
  ENDPOINT_TODAY = '/api/open/today'

  constructor(private http: HttpClient) {}

  getTodayStat() {
    try {
      const response = this.http.get(this.ENDPOINT_TODAY).toPromise()
      console.log(response)
    } catch (error) {
      console.error('getTodayStat:', error)
    }
  }
}
