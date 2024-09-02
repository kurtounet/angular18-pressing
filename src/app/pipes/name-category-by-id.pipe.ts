import { Inject, inject, Pipe, PipeTransform } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { map } from 'rxjs';

@Pipe({
  name: 'nameCategoryById',
  standalone: true
})
export class NameCategoryByIdPipe implements PipeTransform {

  serviceCategory = inject(CategoryService);

  transform(value: number): void {
    console.log(value)

    let category = this.serviceCategory.getAllCategories()
    console.log(category)
    //return category.name;
  }

}
