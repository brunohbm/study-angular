import { Component, Input } from '@angular/core';

// Evite escolher nomes de entrada que colidam com propriedades em elementos DOM como HTMLElement.

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
  inputs: ['disabled: sliderDisabled'],
})
export class InputsComponent {
  @Input({ required: true }) inputRequired = '';
  @Input({ transform: (value: number) => value + 1, required: true }) inputTransform = 0;
  @Input({ alias: 'aliasInput' }) alias = '';
  @Input('aliasInput2') alias2 = '';
  @Input()
  get getSetter() {
    console.log('getSetter get');
    return this.getSetterInternal;
  }
  set getSetter(value: number) {
    this.getSetterInternal = value;
    console.log('getSetter set');
  }
  @Input()
  set writeOnlyInput(value: number) {
    console.log('writeOnlyInput set');
    this.writeOnlyInputInternal = value;
  }

  private writeOnlyInputInternal = 0;
  private getSetterInternal = 0;
}
