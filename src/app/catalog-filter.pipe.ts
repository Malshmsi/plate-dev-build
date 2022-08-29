import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogFilter'
})
export class CatalogFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    return null;
  }

}
