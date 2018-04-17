import { Injectable } from '@angular/core';
import { WizardStep } from './wizard-step/wizard-step';

@Injectable()
export class WizardStateService {

  private current: number = -1;
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

  private isLastStep() {
  }

  private currentIndex() {
    let i = this.wizardSteps.findIndex((step) => { return step.current });
    return i;
  }

}
