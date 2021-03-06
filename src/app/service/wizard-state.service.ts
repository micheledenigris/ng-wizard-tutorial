import { Injectable } from '@angular/core';
import { WizardStep } from '../component/wizard-step/wizard-step';

@Injectable()
export class WizardStateService {

  private wizardSteps: WizardStep[] = [];

  constructor() { }

  public updateWizardStep(wizardSteps: WizardStep[]) {
    this.wizardSteps = wizardSteps;
  }

  public nextStep() {
    let currentIndex = this.currentIndex();
    this.disableStep(currentIndex);
    this.wizardSteps[currentIndex + 1].current = true;
  }

  public previusStep() {
    let currentIndex = this.currentIndex();
    this.disableStep(currentIndex);
    this.wizardSteps[currentIndex - 1].current = true;
  }

  public goTo(stepNumber: number) {
    let currentIndex = this.currentIndex();
    this.disableStep(currentIndex);
    this.wizardSteps[stepNumber].current = true;
  }

  public reset(defaultIndex?: number) {
    if (!defaultIndex) {
      defaultIndex = 0;
    } else {
      defaultIndex--;
    }
    this.goTo(defaultIndex);
  }

  public close() {
    for (let i in this.wizardSteps)
      this.disableStep(parseInt(i));

    let child = document.getElementById("focusOnStep");
    if (child) child.remove();
  }

  public isLastStep() {
    if (this.currentIndex() == this.wizardSteps.length) return true;
    return false;
  }

  public isFirstStep() {
    if (this.currentIndex() == 0) return true;
    return false;
  }

  private disableStep(i: number) {
    this.wizardSteps[i].current = false;

    if (this.wizardSteps[i].element)
      this.wizardSteps[i].element.style.zIndex = "0";
  }

  private currentIndex() {
    let i = this.wizardSteps.findIndex((step) => { return step.current });
    return i;
  }

}
