import { Component, inject, linkedSignal } from '@angular/core';
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

  private readonly categoryData = toSignal(
    this.categoryService.getAll(),
    { initialValue: [] }
  );

  readonly categories = linkedSignal(() => this.categoryData());

  deleteCategory(id: number): void {
    this.categoryService.delete(id).subscribe({
      next: () => {
        this.categories.update(categories =>
          categories.filter(category => category.id !== id)
        );
      },
      error: (err) => {
        console.error('Kategori silinemedi:', err);
      }
    });
  }
}
