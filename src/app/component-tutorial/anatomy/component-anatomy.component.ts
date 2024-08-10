import { Component } from '@angular/core';

// O objeto passado para o decorador @Component é chamado de metadados do componente.
// O elemento DOM que corresponde ao seletor de um componente é chamado de elemento host desse componente.
// O DOM renderizado por um componente, correspondente ao modelo desse componente, é chamado de visualização desse componente.
// O selector e um CSS selector (wtf????)

@Component({
  selector: 'app-component-anatomy',
  standalone: true,
  imports: [],
  templateUrl: './component-anatomy.component.html',
  styleUrl: './component-anatomy.component.css'
})
export class ComponentAnatomyComponent {

}
