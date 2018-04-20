import { Directive, Host } from '@angular/core';
import { WizardStepComponent } from '../component/wizard-step/wizard-step.component';

@Directive({
  selector: '[current]'
})
export class CurrentDirective {

  constructor( @Host() private hostStep: WizardStepComponent) {
    this.hostStep.current = true;
  }
}
