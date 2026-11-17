
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService } from '../../Services/auth-service';
import { UserLogin } from '../../app/models/userLogin';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  userLogin = {} as UserLogin;

  readonly errorMessage = signal('');
  readonly showPassword = signal(false);
  readonly isLoading = signal(false);

  login(): void {
    if (this.isLoading()) return;

    this.errorMessage.set('');
    this.isLoading.set(true);

    this.authService.login(this.userLogin)
      .pipe(
        finalize(() => this.isLoading.set(false))
      )
      .subscribe({
      next: (response) => {
            localStorage.setItem('token', response.token);

            const user = this.authService.getUser();

            console.log('Kullanıcı ID:', user?.id);
            console.log('Kullanıcı Adı:', user?.userName);
            console.log('E-posta:', user?.email);

            this.router.navigate(['/admin/categories']);
          },
        error: (err) => {
          this.errorMessage.set(
            err.error?.message || 'Giriş sırasında bir hata oluştu.'
          );
        }
      });
  }
}
