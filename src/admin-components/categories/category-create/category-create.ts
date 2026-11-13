import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../Services/category-service';
import { CreateCategoryDto } from '../../../app/models/category';

@Component({
  selector: 'app-category-create',
  imports: [FormsModule, RouterLink],
  templateUrl: './category-create.html'
})
export class CategoryCreate {

  private categoryService = inject(CategoryService);
  private router = inject(Router);

  category: CreateCategoryDto = {
    name: ''
  };

  isLoading = false;

  onSubmit(): void {
    if (!this.category.name.trim() || this.isLoading) {
      return;
    }

    this.isLoading = true;

    this.categoryService.create(this.category).subscribe({
      next: () => {
        this.router.navigate(['/admin/categories']);
      },
      error: (error) => {
        console.error('Kategori oluşturulamadı:', error);
        this.isLoading = false;
      }
    });
  }


}
