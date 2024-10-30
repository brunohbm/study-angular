import { Directive, HostListener } from '@angular/core';

// Angular só suporta a pseudo-classe :not. 
@Directive({
  selector: '.hover-selector:not(span), h1, button[disabled]',
  standalone: true
})
export class OtherSelectorsDirective {
  @HostListener('mouseenter', ['$event']) onMouseEnter(event: Event) {
    event.preventDefault();
    console.log('mouseenter event');
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: Event) {
    event.preventDefault();
    console.log('mouseleave event');
  }
}
