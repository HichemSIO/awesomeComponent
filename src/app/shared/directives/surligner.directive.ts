import {
  AfterViewChecked,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSurligner]',
})
export class SurlignerDirective implements AfterViewChecked {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewChecked(): void {
    this.setBackgroundColor('red');
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
