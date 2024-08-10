import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    calculateTaskTime(days: number) {
        return days * 8;
    }
}