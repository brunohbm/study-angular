import { Injectable } from '@angular/core';

// O decorator @Injectable({ providedIn: 'root' }) torna a classe um serviço singleton disponível em 
// toda a aplicação Angular. Ele facilita o gerenciamento de dependências e otimiza o código, removendo \
// serviços não utilizados durante a build.
@Injectable({
    providedIn: 'root',
})
export class TaskService {
    calculateTaskTime(days: number) {
        return days * 8;
    }
}