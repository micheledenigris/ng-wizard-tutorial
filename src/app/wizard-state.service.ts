import { Injectable } from '@angular/core';
import { WizardStep } from './wizard-step/wizard-step';

@Injectable()
export class WizardStateService {

  private wizardSteps: WizardStep[] = [];

  constructor() { }

  public updateWizardStep(wizardSteps: WizardStep[]) {
    this.wizardSteps = wizardSteps;
  }

  public nextStep() {
    let currentIndex = this.currentIndex();
    this.wizardSteps[currentIndex].current = false;
    this.wizardSteps[currentIndex + 1].current = true;
  }

  public previusStep() {
    let currentIndex = this.currentIndex();
    this.wizardSteps[currentIndex].current = false;
    this.wizardSteps[currentIndex - 1].current = true;
  }

  public isLastStep() {
    if (this.currentIndex() == this.wizardSteps.length) return true;
    return false;
  }

  public isFirstStep() {
    if (this.currentIndex() == 0) return true;
    return false;
  }

  private currentIndex() {
    let i = this.wizardSteps.findIndex((step) => { return step.current });
    return i;
  }

}
