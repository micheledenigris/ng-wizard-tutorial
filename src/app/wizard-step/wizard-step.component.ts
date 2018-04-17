import { Component, OnInit } from '@angular/core';
import { WizardStep } from './wizard-step';

@Component({
  selector: 'wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent extends WizardStep implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.focus) return;
    this.setPosition();
  }

  setPosition() {
    let boundingFocus = this.focus.getBoundingClientRect();
    this.top = boundingFocus.top;
    this.left = boundingFocus.left + boundingFocus.width + 10;
  }

}
