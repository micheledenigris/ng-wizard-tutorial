import { Directive, HostListener } from '@angular/core';
import { WizardStateService } from './wizard-state.service';

@Directive({
  selector: '[previusStep]'
})
export class PreviusStepDirective {

  constructor(private wizardState: WizardStateService) { }

  @HostListener("click", ["$event"])
  public onPreviusStep(e) {
    if (this.wizardState.isFirstStep()) return;
    this.wizardState.previusStep();
  }

}
