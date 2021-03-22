import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => {
      const module = await import('./today-stat/today-stat.module')
      return module.TodayStatModule
    },
  },
  {
    path: '**',
    loadChildren: async () => {
      const module = await import('./not-found/not-found.module')
      return module.NotFoundModule
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
