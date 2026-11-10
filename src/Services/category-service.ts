import { inject,Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../app/models/category';

@Service()
export class CategoryService {
  baseUrl = "https://localhost:7000/api/categories/";

  private http = inject(HttpClient);

  getAll(){
    return this.http.get<Category[]>(this.baseUrl);
  }

}
