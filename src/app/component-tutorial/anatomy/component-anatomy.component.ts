import { Component } from '@angular/core';

// O objeto passado para o decorador @Component é chamado de metadados do componente.
// O elemento DOM que corresponde ao seletor de um componente é chamado de elemento host desse componente.
// O DOM renderizado por um componente, correspondente ao modelo desse componente, é chamado de visualização desse componente.
// O selector e um CSS selector (wtf????)

// Angular combina seletores estaticamente em tempo de compilação.

// A equipe do Angular recomenda usar um prefixo curto e consistente para todos os componentes 
// personalizados do projeto, por exemplo "yt-" em um projeto com nome youtube.

@Component({
  selector: 'sa-component-anatomy',
  standalone: true,
  imports: [],
  templateUrl: './component-anatomy.component.html',
  styleUrl: './component-anatomy.component.css'
})
export class ComponentAnatomyComponent {

}
