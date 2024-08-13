import { Component, ViewEncapsulation } from '@angular/core';

// Os três modos de encapsulamento de estilo em Angular são:
// ViewEncapsulation.Emulated: O modo padrão, onde os estilos de um componente são aplicados apenas aos elementos em seu template. Ele emula o encapsulamento ao adicionar atributos únicos ao HTML e ao CSS. Os estilos globais ainda podem afetar o componente.
// ViewEncapsulation.ShadowDom: Usa a API Shadow DOM para encapsular os estilos dentro do componente. Neste modo, os estilos são totalmente isolados, sem interferência externa ou vazamento.
// ViewEncapsulation.None: Desativa todo encapsulamento, tornando os estilos do componente globais, aplicáveis a toda a aplicação.

@Component({
  selector: 'app-style-encapsulation',
  standalone: true,
  imports: [],
  templateUrl: './style-encapsulation.component.html',
  styleUrl: './style-encapsulation.component.css',
  encapsulation: ViewEncapsulation.Emulated, // Default
})
export class StyleEncapsulationComponent {

}
