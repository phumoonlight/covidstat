import { TestBed } from '@angular/core/testing'

import { TimelineStatService } from './timeline-stat.service'

describe('TimelineStatService', () => {
  let service: TimelineStatService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TimelineStatService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
