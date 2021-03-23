import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'

import { TodayStatService } from '../shared/services/today-stat.service'
import { HeaderComponent } from 'src/app/shared/components/header/header.component'
import { TodayStatComponent } from './today-stat.component'
import { appInterceptorProviders } from 'src/app/app.interceptor';

describe('TodayStatComponent', () => {
  let component: TodayStatComponent
  let fixture: ComponentFixture<TodayStatComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodayStatComponent, HeaderComponent],
      providers: [appInterceptorProviders, TodayStatService],
      imports: [HttpClientModule],
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
