import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  repoUrl: string = environment.repoUrl
  apiUrl: string = 'https://covid19.th-stat.com/th/api'

  constructor() {}

  ngOnInit(): void {}
}
