import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryService } from '../../../Services/category-service';

@Component({
  selector: 'app-category-list',
  imports: [RouterLink],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {
  private readonly categoryService = inject(CategoryService);

  readonly categories = toSignal(this.categoryService.getAll(), {
    initialValue: []
  });
}
