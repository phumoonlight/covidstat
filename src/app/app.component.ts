import { Component, OnInit } from '@angular/core'

import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading: boolean = true

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getTodayStat()
  }
}
