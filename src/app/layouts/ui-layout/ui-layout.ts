import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-ui-layout',
  styleUrl: './ui-layout.css',
  templateUrl: './ui-layout.html',
})
export class UiLayout {}
