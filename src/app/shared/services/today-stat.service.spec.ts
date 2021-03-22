import { TestBed } from '@angular/core/testing'

import { TodayStatService } from './today-stat.service'

describe('TodayStatService', () => {
  let service: TodayStatService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TodayStatService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
