import { Directive, HostListener, HostBinding } from '@angular/core';

// O termo "diretiva" é usado para descrever uma classe que pode modificar o comportamento de elementos DOM
// Adicionando assim instruções (diretivas/direções) aos elementos HTML para alterar sua aparência, comportamento ou conteúdo.
// - Diretivas de Atributo (Attribute Directives): Modificam o comportamento ou o estilo de um elemento existente. Exemplo: ngClass, ngStyle.
// - Diretivas Estruturais (Structural Directives): Alteram a estrutura do DOM, como adicionar, remover ou manipular elementos. Exemplo: *ngIf, *ngFor, *ngSwitch.
// - Componentes: Tecnicamente, componentes são um tipo especial de diretiva com um template associado. Isso significa que todo componente Angular é, na verdade, uma diretiva com um template.
@Directive({
  selector: '[dropzone]',  // Seletor de atributo
  standalone: true
})
export class AttributeSelectorDirective {

  // Bind para alterar a classe CSS com base em eventos de arrastar e soltar
  @HostBinding('class.file-over') fileOver: boolean = false;

  // Ouve o evento de "dragover" e impede o comportamento padrão
  @HostListener('dragover', ['$event']) onDragOver(event: Event) {
    event.preventDefault();
    this.fileOver = true;
  }

  // Ouve o evento de "dragleave" e remove a classe
  @HostListener('dragleave', ['$event']) onDragLeave(event: Event) {
    event.preventDefault();
    this.fileOver = false;
  }

  // Ouve o evento de "drop" e impede o comportamento padrão
  @HostListener('drop', ['$event']) onDrop(event: any) {
    event.preventDefault();
    this.fileOver = false;
    // Você pode manipular os arquivos arrastados aqui
    const files = event.dataTransfer.files;
    console.log(files);
  }
}
