import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list-tutorial/todo-list/todo-list.component';
import { ComponentAnatomyComponent } from './component-tutorial/anatomy/component-anatomy.component';
import { AttributeSelectorDirective } from './component-tutorial/attribute-selector/attribute-selector.directive';
import { OtherSelectorsDirective } from './component-tutorial/other-selectors/other-selectors.directive';
import { StyleEncapsulationComponent } from './component-tutorial/style-encapsulation/style-encapsulation.component';
import { InputsComponent } from './component-tutorial/inputs/inputs.component';
import { CardComponent } from './card/card.component';
import { BindingComponent } from './binding/binding.component';
import { InheritanceComponent } from './inheritance/inheritance.component';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    TodoListComponent, 
    ComponentAnatomyComponent,
    AttributeSelectorDirective,
    OtherSelectorsDirective,
    StyleEncapsulationComponent,
    InputsComponent,
    CardComponent,
    BindingComponent,
    InheritanceComponent,
    HighlightDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-angular-app';
  text = 'TESTE';
}
