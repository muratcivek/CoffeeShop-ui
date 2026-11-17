import { Component, inject } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { AuthService } from '../../../Services/auth-service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {

  private readonly authService = inject(AuthService);

  readonly user = this.authService.getUser();

}
