import { Component, inject, Input, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class CategoryUpdate implements OnInit {

  @Input() id!: number;

  private categoryService = inject(CategoryService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  category = {} as Category;

  ngOnInit(): void {
    this.categoryService.getById(this.id).subscribe({
      next: (value) => {
        this.category = value;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onSubmit(): void {
    this.categoryService.update(this.category).subscribe({
      next: () => {
        this.router.navigate(['/admin/categories']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
