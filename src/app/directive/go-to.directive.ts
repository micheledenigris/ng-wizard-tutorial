import { Directive, HostListener, Input } from '@angular/core';
import { WizardStateService } from '../service/wizard-state.service';

@Directive({
  selector: '[goTo]'
})
export class GoToDirective {
  @Input() stepNumber: number;

  constructor(private wizardState: WizardStateService) { }

  @HostListener("click", ["$event"])
  public onGoTo() {
    this.wizardState.goTo(this.stepNumber - 1);
  }
}
