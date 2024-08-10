import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  private taskService = inject(TaskService);

  @Input({ required: true }) task!: {
    title: string;
    daysToFinish: number;
  }

  isComplete = false;

  get daysToFinish() {
    return this.taskService.calculateTaskTime(this.task.daysToFinish)
  }

  completeTask() {
    this.isComplete = true;
  }
}
