import { Component } from '@angular/core';
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  tasks = [
    {
      title: "Fazer compras",
      daysToFinish: 1,
    },
    {
      title: "Lervar o cachorro para passear",
      daysToFinish: 4,
    },
    {
      title: "Deixar o cachorro no petshop",
      daysToFinish: 5,
    },
    {
      title: "Adotar outro cachorro",
      daysToFinish: 8,
    },
  ]
}
