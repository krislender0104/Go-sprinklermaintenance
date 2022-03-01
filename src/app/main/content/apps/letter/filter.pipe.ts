import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filterLetters'
})
export class FilterPipe implements PipeTransform {
    
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            return it.NoticeName.toLowerCase().includes(searchText);
        });
    }
}