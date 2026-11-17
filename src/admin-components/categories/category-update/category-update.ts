import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../Services/category-service';
import { Category } from '../../../app/models/category';

@Component({
  selector: 'app-category-update',
  imports: [FormsModule, RouterLink],
  templateUrl: './category-update.html',
  styleUrl: './category-update.css'
})
export class CategoryUpdate {

  private readonly categoryService = inject(CategoryService);
  private readonly router = inject(Router);
  private readonly location = inject(Location);

category: Category | null = null;

constructor() {
  const state = this.location.getState() as {
    category?: Category;
  };

  if (!state.category) {
    this.router.navigate(['/admin/categories']);
    return;
  }

  this.category = { ...state.category };
}


  onSubmit(): void {
  if (!this.category) return;

  this.categoryService.update(this.category).subscribe({
    next: () => {
      this.router.navigate(['/admin/categories']);
    },
    error: (err) => {
      console.error('Kategori güncellenemedi:', err);
    }
  });
}
}
