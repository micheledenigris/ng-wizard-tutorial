import { Directive, HostListener, Host } from '@angular/core';
import { WizardStateService } from '../service/wizard-state.service';
import { WizardStepComponent } from '../component/wizard-step/wizard-step.component';

@Directive({
  selector: '[nextStep]'
})
export class NextStepDirective {

  constructor(private wizardState: WizardStateService) { }

  @HostListener("click", ["$event"])
  public onNextStep() {
    if (this.wizardState.isLastStep()) return;
    this.wizardState.nextStep();
  }
}
