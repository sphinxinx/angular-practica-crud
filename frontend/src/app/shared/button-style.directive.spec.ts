import { ButtonStyleDirective } from './button-style.directive';
import { ElementRef, Renderer2 } from '@angular/core';

// Creamos los mocks para ElementRef y Renderer2
class MockElementRef {
  nativeElement = {};
}

class MockRenderer2 {
  addClass(element: any, className: string) {}
  removeClass(element: any, className: string) {}
}

describe('ButtonStyleDirective', () => {
  let directive: ButtonStyleDirective;
  let el: MockElementRef;
  let renderer: MockRenderer2;

  beforeEach(() => {
    // Inicializamos los mocks
    el = new MockElementRef();
    renderer = new MockRenderer2();

    // Creamos la directiva con los mocks inyectados
    directive = new ButtonStyleDirective(el as unknown as ElementRef, renderer as unknown as Renderer2);
  });

  it('should create an instance', () => {
    // Verificamos si la directiva fue creada correctamente
    expect(directive).toBeTruthy();
  });

  // Agregar más pruebas si es necesario
});