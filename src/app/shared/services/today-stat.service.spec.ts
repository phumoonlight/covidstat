import { TestBed } from '@angular/core/testing'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { TodayStatService } from './today-stat.service'

describe('TodayStatService', () => {
  let service: TodayStatService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodayStatService, HttpClient],
      imports: [HttpClientModule],
    })
    service = TestBed.inject(TodayStatService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
