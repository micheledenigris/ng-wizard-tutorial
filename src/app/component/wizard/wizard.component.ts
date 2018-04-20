import { Component, OnInit, QueryList, ViewChildren, AfterViewInit, AfterContentInit, ContentChildren } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { WizardStateService } from '../../service/wizard-state.service';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit, AfterContentInit {
  @ContentChildren(WizardStepComponent) wizardStep: QueryList<WizardStepComponent>


  constructor(private wizardState: WizardStateService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.wizardState.updateWizardStep(this.wizardStep.toArray());
  }
}
