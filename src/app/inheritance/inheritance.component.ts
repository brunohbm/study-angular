import { Component, Input } from '@angular/core';

// Quando um componente estende outro componente ou uma diretiva, ele herda todos os metadados 
// definidos no decorador da classe base e os membros decorados da classe base. Isso inclui o seletor, 
// o modelo, os estilos, as vinculações de host, as entradas, as saídas, os métodos de ciclo de vida e 
// quaisquer outras configurações.

@Component({
  selector: 'base-listbox',
  template: `
    ...
  `,
  host: {
    '(keydown)': 'handleKey($event)',
  },
})
export class ListboxBase {
  @Input() value: string = 'teste';
  handleKey(event: KeyboardEvent) {
    /* ... */
  }
}

@Component({
  selector: 'app-inheritance',
  standalone: true,
  imports: [],
  templateUrl: './inheritance.component.html',
  styleUrl: './inheritance.component.css'
})
export class InheritanceComponent extends ListboxBase {
  constructor() {
    super();
    console.log(this.handleKey)
    console.log(this.value)
  }
}
