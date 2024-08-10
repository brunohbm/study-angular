import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list-tutorial/todo-list/todo-list.component';
import { ComponentAnatomyComponent } from './component-tutorial/anatomy/component-anatomy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TodoListComponent, 
    ComponentAnatomyComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
}
