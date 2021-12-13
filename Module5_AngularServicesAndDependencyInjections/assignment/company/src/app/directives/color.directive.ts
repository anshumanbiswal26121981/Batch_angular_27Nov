import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private _elementref: ElementRef) { }

  @HostListener('mouseenter') onEnter() {
    this._elementref.nativeElement.style.background = 'lightgreen';
    this._elementref.nativeElement.style.color = 'black';
  }

  @HostListener('mouseleave') onLeave() {
    this._elementref.nativeElement.style.background = 'initial';
    this._elementref.nativeElement.style.color = 'initial';
  }

}
