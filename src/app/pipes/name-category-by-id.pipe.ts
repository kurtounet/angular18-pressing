import { Inject, inject, Pipe, PipeTransform } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { map, Observable } from 'rxjs';
import { ICategory } from '../models/category.model.';

@Pipe({
  name: 'nameCategoryById',
  standalone: true
})
export class NameCategoryByIdPipe implements PipeTransform {

  categoryService = inject(CategoryService);
  transform(categoryId: number): string | undefined {
    let category = this.categoryService.arrayCategories.find(cat => cat.id === categoryId);
    return category ? category.name : undefined;
  }

}
