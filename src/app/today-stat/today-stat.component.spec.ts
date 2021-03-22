import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TodayStatComponent } from './today-stat.component'

describe('TodayStatComponent', () => {
  let component: TodayStatComponent
  let fixture: ComponentFixture<TodayStatComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodayStatComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayStatComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
