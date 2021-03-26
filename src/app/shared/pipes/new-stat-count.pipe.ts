import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'newStatCount',
})
export class NewStatCountPipe implements PipeTransform {
  transform(value: number | string): string {
    if (+value > 0) return `+${value}`
    if (+value < 0) return `-${value}`
    return `(unchanged)`
  }
}
