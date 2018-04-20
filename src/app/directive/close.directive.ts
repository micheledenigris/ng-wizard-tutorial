import { Directive, Host, HostListener } from '@angular/core';
import { WizardStateService } from '../service/wizard-state.service';

@Directive({
  selector: '[close]'
})
export class CloseDirective {

  constructor(private wizardState: WizardStateService) { }

  @HostListener("click", ["$event"])
  public onNextStep() {
    this.wizardState.close();
  }
}
