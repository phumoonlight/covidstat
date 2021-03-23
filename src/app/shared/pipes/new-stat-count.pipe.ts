import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'newStatCount',
})
export class NewStatCountPipe implements PipeTransform {
  transform(value: number | string): string {
    return +value > 0 ? `+${value}` : `-${value}`
  }
}
