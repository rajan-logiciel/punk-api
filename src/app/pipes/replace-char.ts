import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'strReplace'})
export class StrReplacePipe implements PipeTransform {

  /**
   * @function transform
   * @param [value] Use to the content
   * @param [from] Use to get the content which need to replace 
   * @param [Value] Use to get the content which is used for replace with
   * */
  transform(value: string, from: string, to: string): string {

    if(!value || ! from || ! to)
    {
      return value;
    }

     return value.replace(new RegExp(from, 'g'), to);
  }
}