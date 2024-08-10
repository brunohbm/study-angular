import { Component } from '@angular/core';

// Um componente autônomo é um componente que define standalone: ​​true nos metadados 
// de seu componente. Eles importam diretamente outros componentes, diretivas e pipes usados ​​em seus modelos.
// A equipe Angular recomenda o uso de componentes independentes para todos os novos desenvolvimentos.

// Diferença entre NgModules e Standalone Components (Angular 14>=).

// NgModules: São conjuntos de componentes, diretivas, pipes, e serviços agrupados em uma unidade, 
// essencial para a maioria das aplicações Angular, especialmente em arquiteturas complexas. NgModules 
// ainda são muito úteis e poderosos para organizar e estruturar grandes aplicativos.

// Standalone Components: São componentes independentes que não precisam ser declarados em um NgModule. 
// Eles simplificam o desenvolvimento de aplicativos mais simples ou micro-frontends, permitindo uma 
// maior flexibilidade na modularização do código.

@Component({
  selector: 'app-standalone',
  standalone: true,
  imports: [],
  templateUrl: './standalone.component.html',
  styleUrl: './standalone.component.css'
})
export class StandaloneComponent {

}
