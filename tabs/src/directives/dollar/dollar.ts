import { Directive } from '@angular/core';

/**
 * Generated class for the DollarDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[dollar]' // Attribute selector
})
export class DollarDirective {

  constructor() {
    console.log('Hello DollarDirective Directive');
  }

}
