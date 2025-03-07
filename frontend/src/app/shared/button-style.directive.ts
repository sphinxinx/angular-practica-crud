import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appButtonStyle]',
})
export class ButtonStyleDirective implements OnChanges {
  @Input() appButtonStyle: 'primary' | 'secondary' | 'danger' = 'primary';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appButtonStyle']) {
      this.setButtonStyle();
    }
  }

  private setButtonStyle() {
    const element = this.el.nativeElement;
    console.log(element);
    switch (this.appButtonStyle) {
      case 'primary':
        this.renderer.addClass(element, 'btn-primary');
        break;
      case 'secondary':
        this.renderer.addClass(element, 'btn-secondary');
        break;
      case 'danger':
        this.renderer.addClass(element, 'btn-danger');
        break;
      default:
        this.renderer.addClass(element, 'btn-primary');
    }
  }
}
