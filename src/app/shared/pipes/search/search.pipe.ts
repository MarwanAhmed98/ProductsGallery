import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrOfProduct: any[], text:string): any[] {
    return arrOfProduct.filter(  (item)=> item.title.toLowerCase().includes(text.toLocaleLowerCase())  ) ;
  }

}
