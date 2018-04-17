import { Directive, HostListener } from '@angular/core';
import { WizardStateService } from './wizard-state.service';

@Directive({
  selector: '[nextStep]'
})
export class NextStepDirective {

  constructor(private wizardState: WizardStateService) { }

  @HostListener("click", ["$event"])
  public onNextStep() {
    this.wizardState.nextStep();
  }
}
