import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(private _elementref: ElementRef) { }

  @HostListener('mouseenter') onEnter() {
    this._elementref.nativeElement.style.background = 'grey';
    this._elementref.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') onLeave() {
    this._elementref.nativeElement.style.background = 'initial';
    this._elementref.nativeElement.style.color = 'initial';
  }

}
