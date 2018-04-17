import { Component, OnInit, QueryList, ViewChildren, AfterViewInit, AfterContentInit, ContentChildren } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { WizardStateService } from '../wizard-state.service';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
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
