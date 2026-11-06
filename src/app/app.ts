import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';
import { Home } from '../ui-components/home/home';

@Component({
  imports: [RouterOutlet, Home],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

user1 : User = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  age: 30
}

user2 : User = {
  id: 2,
  firstName: 'Jane',
  lastName: 'Smith',
  age: 25
}

userList : User[] = [this.user1, this.user2];

}
