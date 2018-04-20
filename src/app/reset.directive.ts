import { Directive, HostListener } from '@angular/core';
import { WizardStateService } from './wizard-state.service';

@Directive({
  selector: '[reset]'
})
export class ResetDirective {

  constructor(private wizardState: WizardStateService) { }

  @HostListener("click", ["$event"])
  public onPreviusStep(e) {
    this.wizardState.reset();
  }

}
